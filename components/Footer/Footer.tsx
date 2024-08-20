import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mx-auto max-w-screen-xl mt-16 px-4 md:px-8 bg-skin2">
      <div className="flex flex-col items-center justify-between gap-4 border-t border-b py-6 md:flex-row">
        {/* nav - start */}
        <nav className="text-white flex flex-wrap items-center text-base justify-center">
          <Link href="/Blog/ligikuu" className="mr-5 hover:text-text">
            ligikuu
          </Link>
          <Link href="/Blog/kimataifa" className="mr-5 hover:text-text">
            kimataifa
          </Link>
          <Link href="/Blog/Bongofleva" className="mr-5 hover:text-text">
            Bongofleva
          </Link>
          <Link href="/Blog/Jamii" className="mr-5 hover:text-text">
            Jamii
          </Link>
        </nav>
        {/* nav - end */}

        {/* social - start */}
        <div className="flex gap-4">
          {/* Instagram */}
          <Link
            href="#"
            target="_blank"
            className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
          >
            <svg
              className="h-5 w-5"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </Link>

          {/* Twitter */}
          <Link
            href="/"
            target="_blank"
            className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
          >
            <svg
              className="h-5 w-5"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
            </svg>
          </Link>

          {/* Facebook */}
          <Link
            href="/"
            target="_blank"
            className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
          >
            <svg
              className="h-5 w-5"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.325v21.351c0 .733.592 1.324 1.325 1.324h11.49v-9.294h-3.13v-3.622h3.13v-2.671c0-3.1 1.892-4.788 4.655-4.788 1.325 0 2.464.099 2.796.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.311h3.587l-.467 3.622h-3.12v9.294h6.116c.733 0 1.325-.591 1.325-1.324v-21.35c0-.733-.592-1.325-1.325-1.325z" />
            </svg>
          </Link>

          {/* Pinterest */}
          <Link
            href="/"
            target="_blank"
            className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
          >
            <svg
              className="h-5 w-5"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 0c-6.627 0-12 5.373-12 12 0 4.63 3.181 8.643 7.584 10.011-.104-.85-.198-2.154.041-3.081.215-.859 1.391-5.461 1.391-5.461s-.355-.71-.355-1.758c0-1.645.954-2.873 2.141-2.873 1.009 0 1.497.757 1.497 1.665 0 1.014-.646 2.524-.978 3.93-.276 1.165.585 2.114 1.732 2.114 2.079 0 3.677-2.191 3.677-5.358 0-2.802-2.016-4.765-4.888-4.765-3.333 0-5.287 2.498-5.287 5.081 0 .999.387 2.068.871 2.65.095.114.109.213.08.329-.088.359-.283 1.142-.321 1.3-.05.205-.163.249-.377.151-1.403-.643-2.283-2.664-2.283-4.289 0-3.489 2.54-6.699 7.322-6.699 3.841 0 6.827 2.742 6.827 6.415 0 3.812-2.401 6.876-5.737 6.876-1.121 0-2.175-.585-2.537-1.27l-.688 2.62c-.25.967-.924 2.178-1.381 2.918.989.305 2.038.471 3.132.471 6.627 0 12-5.373 12-12 0-6.627-5.373-12-12-12z" />
            </svg>
          </Link>
        </div>
        {/* social - end */}
      </div>

      <div className="py-8 text-center text-sm text-white">
        © {new Date().getFullYear()} - sportgazeti.com All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
