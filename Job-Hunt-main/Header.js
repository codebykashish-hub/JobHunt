import React from 'react'
import Link from 'next/link';
const Header = () => {
  return (
    <div className="h-16 px-5 bg-green-500 flex items-center justify-between">
      <h2>logo</h2>
      <div className="flex gap-5">
        <Link href="/About">About</Link>
        <Link href="/Career">Career</Link>
        <Link href="/Blog">Blog</Link>
        <Link href="/Feedback">Feedback</Link>
      </div>
    </div>
  );
};

export default Header