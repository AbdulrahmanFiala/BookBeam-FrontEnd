# BookBeam-FrontEnd 
![BookBeam Landing Page](https://github.com/AbdulrahmanFiala/BookBeam-FrontEnd/blob/master/Demos/BookBeam.png)

## Description
BookBeam is a library web application designed to efficiently manage web-based libraries. It provides a comprehensive set of features for both users and administrators, facilitating easy access to library resources and seamless management of library operations. Identity management is handled using Okta for secure authentication and authorization.

### User Features:
- Browse available books.
- Search for a certain book.
- View the details of a certain book.
- Check out a certain book.
- Review a book and explore previous reviews.
- Manage book loans.
- Return a book.
- Renew a book loan.
- Browse previously checked-out books.
- Pay fees for late books using Stripe.
- Ask questions to the admin.
- Explore previously answered questions.

### Admin Features:
- Admin panel with secure access controls.
- Answer users' questions.
- Change the quantity of a certain book.
- Add new books to the library.
- Delete books from the library.


## Installation

### Prerequisites
- Node.js installed.
- npm (Node Package Manager) installed.

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/AbdulrahmanFiala/BookBeam-FrontEnd.git

2. Navigate to the project directory:
   ```bash
   cd "BookBeam-FrontEnd"

3. Switch to the development branch:
   ```bash
   git checkout development
   
4. Set up environment variables:
   - Rename the `.env-example` file to ".env" in the root directory.
   - Fill the following variables in the `.env` file:
     ```plaintext
     REACT_APP_BACKEND_BASE_URL=your_backend_api_base_url
     REACT_APP_OKTA_CLIENT_ID=your_OKTA_client_id
     REACT_APP_OKTA_ISSUER=your_OKTA_issuer
     ```

5. Run the project using npm:
   ```bash
   npm start
   ```

## Usage
Once the application is running, you can access it in your web browser at:
[http://localhost:3000](http://localhost:3000)

For the backend of the application, you can refer to the [BookBeam-BackEnd](https://github.com/AbdulrahmanFiala/BookBeam-BackEnd) repository.

