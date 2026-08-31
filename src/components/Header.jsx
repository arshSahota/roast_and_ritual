function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-5">
      <h2 className="text-2xl font-bold text-green-900">
        Roast & Ritual
      </h2>

      <nav>
        <ul className="flex gap-8">
          <li>
            <a href="#menu">Menu</a>
          </li>

          <li>
            <a href="#story">Story</a>
          </li>

          <li>
            <a href="#visit">Visit</a>
          </li>
        </ul>
      </nav>

      <button className="rounded-full bg-green-900 px-5 py-2 text-white">
        Order Now
      </button>
    </header>
  );
}

export default Header;