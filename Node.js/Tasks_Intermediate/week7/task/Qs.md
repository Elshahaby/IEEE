### Q: Is it ok to store the access token for each user in the database? Why or why not?

`answer` 
It is not recommended to store Access Token for each user in your database.
Why not?

- **Stateless Principle**: A core advantage of JWTs is their stateless nature. The server doesn't need to store session information. When an Acess Token is issued, the server trusts it based on its signature. Storing them in the databse would re-introduce state and cancel this benefit.
- **Performance Overhead**: For every API request requiring authentication, the server would have to perform a database lookup for the Access Token, in addition to verifying its signature. This adds unnecessary latency and load to your database.
- **Scalability Issues**: In a microservices architecture or a horizontally scaled application, managing Access Tokens across multiple server instances via a central database becomes complex
 - **Security Risks (especially if not properly hashed/encrypted)**: If your database were compromised, the stolen Access Tokens could be directly used by attackers until they expire. While Refresh Tokens need to be stored (and secured!), Access Tokens are designed to be short-lived and validated cryptographically. If you do store them, you'd need to hash/encrypt them, which adds complexity but doesn't solve the performance/statelessness issues.
 - **Short Lifespan**: Access Tokens are meant to be short-lived (minutes to hours). Storing and managing their expiration in a database is redundant and inefficient given their short validity.

But the Question is When it might be considered (with extreme caution and specific use cases):

- **Blacklisting/Revocation of Access Tokens (rare)**: For very high-security scenarios where immediate revocation of a specific active Access Token is critical (e.g., administrator force-logging out a user, or detection of a compromised token before it expires), you might put the ID of the token (using the jti claim) into a short-lived blacklist (often in an in-memory store like Redis, not a full database). This is a blacklist of revoked tokens, not a store of all active tokens. Even then, short-lived Access Tokens often expire before they can be effectively blacklisted across all services.

---

<br>

### Q: What are the default algorithms used for signing JWTs?

- **HMAC with SHA-256 (HS256)**: This is a symmetric algorithm. It uses a single secret key to both sign and verify the token. It's widely supported and good for server-to-server communication where both parties share the secret.

- **RSA with SHA-256 (RS256)**: This is an asymmetric algorithm. It uses a private key to sign the token and a corresponding public key to verify it. This is crucial for scenarios where multiple parties need to verify tokens issued by one authority (e.g., an Identity Provider signing tokens that several different resource servers need to validate).

---

<br>

### Q: Explain the difference between access tokens and refresh tokens

Access tokens and refresh tokens are two distinct types of tokens used together in modern authentication systems (like OAuth and OpenID Connect) to enhance security and user experience.

`Access Token`
- The purpose of it is to gain access to protected resources. It's the key to the locked door.
- Lifespan: Short-lived(minutes to few hours). This reduce the opportunity for an attacker if the token is stolen.
- Usage: Sent with every API request to protected endpoints (in the **Authorization: Bearer <token>** header)
- Characteristics: Usually a JWT, containing user identity and permissions. it is stateless -> the server verifies it without needing a database lookup (unless a blacklist is involved for very specific revocation).
- Revocation: Difficult to revoke immediately before expiration without a centralized blacklist (which adds state).

`Refresh Token`
- The purpose of it is to obtain a **new Access Token** (and sometimes a new Refresh Token as well) once the Access Token expires, without requiring the user to re-enter their credentials. It's like a long-term "pass" to get new "keys".
- Lifespan: Long-lived (typically days, weeks, months, or even years).
- Usage: Refresh tokens are exclusively sent to a dedicated "refresh" or "token" endpoint on the authentication server. Their primary role is to generate a new Access Token (and, particularly in implementations like Refresh Token Rotation, also to generate a new Refresh Token). This process allows the client to obtain fresh access credentials without requiring the user to re-enter their login details. Crucially, refresh tokens are never sent with regular API requests to protected resources; only access tokens are used for that purpose.
- Characteristics: Often a JWT. It is stateful – it must be stored in a secure database (like Redis) by the server so it can be revoked, tracked, and validated against the stored version.
- Revocation: Easy to revoke immediately by deleting it from the server's database. This is crucial for security (e.g., on logout, or if a user changes their password).

so, Access tokens provide access for a short period, while refresh tokens provide renewal for a long period, allowing for a balance of security (short-lived access tokens) and convenience (users don't have to re-login frequently).

---

<br>

### Q: What is the purpose of the `exp`, `iat`, `nbf`, and `jti` claims in a JWT?


These are standard, optional JWT claims (registered claims) defined in RFC 7519 that provide metadata about the token itself.

- `exp` (Expiration Time):
    - Purpose: Identifies the expiration time on or after which the JWT MUST NOT be accepted for processing. It's a numeric date value representing the number of seconds from 1970-01-01T00:00:00Z UTC until the expiration date.
    - Usage: Used by the verifier to ensure the token has not expired. This is crucial for limiting the lifetime of the token.

- `iat` (Issued At Time):
    - Purpose: Identifies the time at which the JWT was issued. It's a numeric date value.
    - Usage: Can be used to determine the age of the token, for logging, or in conjunction with exp to calculate remaining validity.

- `nbf` (Not Before Time):
    - Purpose: Identifies the time before which the JWT MUST NOT be accepted for processing. It's a numeric date value.
    - Usage: Allows a token to be issued in advance but not become valid until a specific future time. This is less common but can be useful in certain scheduling or delayed-release scenarios.

- `jti` (JWT ID):
    - Purpose: Provides a unique identifier for the JWT. The value MUST be assigned in a manner that ensures that there is a negligible probability that the same value will be accidentally assigned to a different JWT.
    - Usage: Primarily used for preventing replay attacks (ensuring a token is used only once) and for token blacklisting/revocation (by storing the jti in a blacklist, allowing immediate invalidation of a token even before its exp time).