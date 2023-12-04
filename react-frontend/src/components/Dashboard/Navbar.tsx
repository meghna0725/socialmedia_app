import { Link, Box } from "@mui/material";
import * as React from "react";

function IconHomeAlt(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" height="1em" width="1em" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6 22.879a3 3 0 01-3-3v-10c0-.034.002-.068.005-.1H3c0-.577.229-1.13.636-1.536L9.88 2a3 3 0 014.242 0l6.243 6.243c.407.407.636.96.636 1.535h-.005c.003.033.005.067.005.1v10a3 3 0 01-3 3H6zm6.707-19.465L19 9.707V19.88a1 1 0 01-1 1h-3v-5a3 3 0 10-6 0v5H6a1 1 0 01-1-1V9.707l6.293-6.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function IconMail(props: React.SVGProps<SVGSVGElement>) {
    return (
      <svg fill="none" viewBox="0 0 24 24" height="1em" width="1em" {...props}>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M3.01 5.838a1 1 0 011-1H20a1 1 0 011 1v11.324a2 2 0 01-2 2H5a2 2 0 01-2-2v-11c0-.048.003-.094.01-.14v-.184zM5 8.062v9.1h14v-9.1l-4.879 4.879a3 3 0 01-4.242 0L5 8.06zm1.572-1.256h10.856l-4.72 4.72a1 1 0 01-1.415 0l-4.72-4.72z"
          clipRule="evenodd"
        />
      </svg>
    );
  };

  function IconAnalytics(props: React.SVGProps<SVGSVGElement>) {
    return (
      <svg
        viewBox="0 0 512 512"
        fill="currentColor"
        height="1em"
        width="1em"
        {...props}
      >
        <path d="M456 128a40 40 0 00-37.23 54.6l-84.17 84.17a39.86 39.86 0 00-29.2 0l-60.17-60.17a40 40 0 10-74.46 0L70.6 306.77a40 40 0 1022.63 22.63L193.4 229.23a39.86 39.86 0 0029.2 0l60.17 60.17a40 40 0 1074.46 0l84.17-84.17A40 40 0 10456 128z" />
      </svg>
    );
  };

  function IconProfile(props: React.SVGProps<SVGSVGElement>) {
    return (
      <svg fill="none" viewBox="0 0 24 24" height="1em" width="1em" {...props}>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M16 9a4 4 0 11-8 0 4 4 0 018 0zm-2 0a2 2 0 11-4 0 2 2 0 014 0z"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zM3 12c0 2.09.713 4.014 1.908 5.542A8.986 8.986 0 0112.065 14a8.984 8.984 0 017.092 3.458A9 9 0 103 12zm9 9a8.963 8.963 0 01-5.672-2.012A6.992 6.992 0 0112.065 16a6.991 6.991 0 015.689 2.92A8.964 8.964 0 0112 21z"
          clipRule="evenodd"
        />
      </svg>
    );
  };

// basic navbar
const Navbar = () => {
    return (
        <div className="navbar">
            <ul className="nav-menu">
                <li><a href="/dashboard"><IconHomeAlt /> Home </a></li>
                <li><a href="/messages"><IconMail /> Messages </a></li>
                <li><a href="/analytics"><IconAnalytics /> Analytics </a></li>
                <li><a href="/profile"><IconProfile /> Profile </a></li>
            </ul>
        </div>
    );
};

export default Navbar;