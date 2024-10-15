const http = require('http');
const url = require('url');

function calculate(operation, a, b) {
    switch (operation) {
        case 'add':
            return a + b;
        case 'subtract':
            return a - b;
        case 'multiply':
            return a * b;
        case 'divide':
            if (b === 0) return 'Cannot divide by zero';
            return a / b;
        default:
            return 'Invalid operation';
    }
}

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname.slice(1);  
    const query = parsedUrl.query;
    
    const a = parseFloat(query.a);
    const b = parseFloat(query.b);

    if (isNaN(a) || isNaN(b)) {
        res.writeHead(400, { 'Content-Type': 'text/plain' });
        res.end('Invalid query parameters. Please provide numbers for a and b.');
        return;
    }

    const result = calculate(pathname, a, b);

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(result.toString());
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
