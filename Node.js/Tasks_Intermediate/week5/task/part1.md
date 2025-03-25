# `Multiple Choice Questions`

1. What is the primary purpose of using bcrypt in password protection?  
    - c) To securely hash and salt passwords

2. In session-based authentication, what does the server typically store?
    - b) A unique session identifier (session ID).

3. Which method is most secure for handling user passwords? 
    - d) Using bcrypt with salt

4. When uploading files to cloud storage like Cloudinary, what is typically transmitted?
    - c) The complete file content

5. What is a key advantage of session-based authentication?
    - c) Ability to track user state


<br>

---

Note related to (4.) :- 

The upload process in Cloudinary involves:

- Sending the file data (binary or base64-encoded) to Cloudinary’s servers.
- Receiving a response that includes a unique file URL, a public ID, and metadata.
- Optionally storing the file reference or unique identifier (b) in a database for future retrieval.


A file reference or unique identifier is a way to keep track of an uploaded file without storing the actual file in your database. Instead of saving the file content, you store a reference (such as a URL or an ID) that allows you to retrieve the file when needed.

How It Works in Cloudinary :-

When you upload a file to Cloudinary, it returns a response containing details like:

- Public ID ("product_images/abc123") → A unique identifier for the file.
- Secure URL ("https://res.cloudinary.com/demo/image/upload/v123456/abc123.jpg") → The direct link to access the file.

Why Store the Reference Instead of the File?
- aves Database Space → Storing only a small reference instead of large binary data.
- Easier File Retrieval → You can access the file with just the URL or ID.
- Better Scalability → Cloud storage handles the file, and your database remains lightweight.
- Security → Cloudinary manages file access, transformations, and optimizations.


Example in a Database :-

- If you have a products collection in MongoDB, instead of storing the image binary data, you store:

```json
{
  "_id": "65f123abc456",
  "name": "Laptop",
  "image_url": "https://res.cloudinary.com/demo/image/upload/v123456/abc123.jpg"
}
```
- Later, when displaying the product, you simply use image_url to show the image, instead of fetching and decoding stored binary data.

---
