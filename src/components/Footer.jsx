const dataLinks = [
  'About',
  'Store location',
  'FAQs',
  'News',
  'Careers',
  ' Contact Us',
];
function Footer() {
  return (
    <div className="flex flex-col p-14 justify-center items-center gap-10 text-slate-200 font-semibold text-lg sm:text-xl bg-stone-950">
      <ul className="flex flex-wrap gap-4 sm:gap-8">
        {dataLinks.map((link) => (
          <li key={link}>{link}</li>
        ))}
      </ul>
      <h2>Design By Raslen</h2>
    </div>
  );
}

export default Footer;
