
function Footer(){

return (

<div className="flex items-center justify-center">
<footer className="footer bg-neutral text-neutral-content items-center p-4">
  <aside className="grid-flow-col items-center">
    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
  </aside>
</footer>
</div>
)
}

export default Footer;