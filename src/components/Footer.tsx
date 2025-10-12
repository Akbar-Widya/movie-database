const Footer = () => {
   return (
      <footer className="min-h-[250px] py-4 flex flex-col justify-center items-center gap-4 bg-light-200">
         <p>© 2025 Kian Pamungkas</p>
         <ul className="flex gap-4 items-center justify-center">
            <li>
               <a href="https://www.linkedin.com/in/kian-pamungkas" target="_blank">
                  <img src="src/assets/linkedin.svg" alt="linkedin-kian" />
               </a>
            </li>
            <li >
               <a href="https://github.com/Akbar-Widya/react-js-projects/tree/main/my-first-react-app" target="_blank">
                  <img src="src/assets/github.svg" alt="github-kian" />
               </a>
            </li>
            <li>
               <a href="https://www.instagram.com/kianpamungkas.pmk" target="_blank">
                  <img src="src/assets/instagram.svg" alt="instagram-kian" />
               </a>
            </li>
         </ul>
      </footer>
   );
};

export default Footer;
