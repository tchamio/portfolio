export default function Footer() {
  return (
    <footer className="space-y-12 text-center pb-16">
      {/* Initials logo */}
      <div>
        <svg
          className="inline-flex fill-gray-800 dark:fill-gray-100"
          width="356"
          height="196"
          viewBox="0 0 356 196"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M5.04617 122.26C4.60617 122.26 3.94617 121.82 3.06617 120.94C2.18617 120.06 1.45284 119.18 0.866172 118.3C0.426173 117.273 0.426173 116.76 0.866172 116.76C4.97284 116.173 8.78617 115.807 12.3062 115.66C15.8262 115.367 19.1262 115.22 22.2062 115.22C27.6328 115.22 32.2528 115.513 36.0662 116.1C40.0262 116.54 43.1795 117.127 45.5262 117.86C45.9662 118.007 46.1862 118.3 46.1862 118.74C46.1862 119.473 45.7462 119.84 44.8662 119.84C39.5862 119.84 33.3528 120.06 26.1662 120.5C18.9795 120.94 11.9395 121.527 5.04617 122.26ZM111.994 195.08C107.3 195.08 102.46 193.687 97.4737 190.9C92.6337 188.113 87.867 183.64 83.1737 177.48C79.507 172.493 76.7937 166.7 75.0337 160.1C73.2737 153.647 72.3937 147.267 72.3937 140.96C72.3937 137.733 72.6137 134.58 73.0537 131.5C73.4937 128.127 74.3737 124.313 75.6937 120.06C77.1603 115.807 78.627 112.287 80.0937 109.5C80.5337 108.62 81.1937 107.667 82.0737 106.64C82.9537 105.613 83.6137 105.1 84.0537 105.1C84.2003 105.1 84.2737 105.173 84.2737 105.32C84.2737 105.467 83.6137 107.007 82.2937 109.94C78.627 117.273 76.7937 125.413 76.7937 134.36C76.7937 142.427 78.0403 150.347 80.5337 158.12C83.1737 165.747 86.547 172.347 90.6537 177.92C94.6137 183.2 98.5003 187.013 102.314 189.36C106.127 191.707 109.867 192.88 113.534 192.88C118.814 192.88 123.727 190.68 128.274 186.28C132.82 182.027 136.634 176.527 139.714 169.78C141.914 165.233 143.747 159.293 145.214 151.96C146.68 144.48 147.854 136.12 148.734 126.88C149.614 117.64 149.98 108.18 149.834 98.5V96.52C144.7 98.72 139.714 101.36 134.874 104.44C130.18 107.373 125.634 110.673 121.234 114.34C120.794 114.78 120.354 115 119.914 115C119.034 115 118.3 114.487 117.714 113.46C117.127 112.287 116.834 111.187 116.834 110.16C116.834 108.4 117.347 107.227 118.374 106.64C123.36 102.827 128.42 99.6733 133.554 97.18C138.834 94.6867 144.26 92.7067 149.834 91.24C149.687 81.7067 148.807 72.3933 147.194 63.3C145.727 54.2067 143.747 45.7733 141.254 38C138.907 30.2267 136.267 23.6267 133.334 18.2L133.114 17.98C123.287 18.1267 113.754 19.1533 104.514 21.06C95.4203 22.82 87.2803 25.5333 80.0937 29.2C72.907 32.72 67.187 37.2667 62.9337 42.84C58.827 48.2667 56.7737 54.7933 56.7737 62.42C56.7737 65.6467 57.067 68.6533 57.6537 71.44C58.387 74.08 59.5603 76.3533 61.1737 78.26C62.0537 79.14 62.4937 79.9467 62.4937 80.68C62.4937 81.56 62.0537 82 61.1737 82C60.2937 82 59.4137 81.4867 58.5337 80.46C56.0403 77.5267 54.427 74.3 53.6937 70.78C52.8137 67.26 52.3737 63.74 52.3737 60.22C52.3737 53.0333 53.987 46.7267 57.2137 41.3C60.587 35.8733 64.987 31.2533 70.4137 27.44C75.987 23.48 82.0737 20.3267 88.6737 17.98C95.2737 15.4867 101.947 13.58 108.694 12.26C115.587 10.94 121.894 10.2067 127.614 10.06C125.56 7.71333 123.654 6.31999 121.894 5.87999C120.28 5.29332 118.814 5.07332 117.494 5.21999C116.32 5.21999 115.294 4.92666 114.414 4.34C113.827 3.89999 113.534 3.38666 113.534 2.79999C113.534 1.33333 115.44 0.599994 119.254 0.599994C122.04 0.599994 125.194 1.33333 128.714 2.79999C132.38 4.11999 135.68 6.53999 138.614 10.06C145.36 10.2067 152.914 10.8667 161.274 12.04C169.634 13.2133 177.847 15.12 185.914 17.76C193.98 20.4 201.02 23.9933 207.034 28.54C213.047 32.94 217.007 38.5867 218.914 45.48C219.06 45.92 219.134 46.58 219.134 47.46C219.134 48.78 218.767 49.44 218.034 49.44C217.3 49.44 216.567 48.56 215.834 46.8C214.22 40.9333 209.894 35.9467 202.854 31.84C195.814 27.7333 187.087 24.5067 176.674 22.16C166.407 19.6667 155.48 18.2733 143.894 17.98C146.974 23.8467 149.394 30.74 151.154 38.66C153.06 46.58 154.454 54.94 155.334 63.74C156.36 72.3933 157.02 80.9733 157.314 89.48C161.567 88.6 165.894 88.0133 170.294 87.72C174.694 87.28 179.167 87.06 183.714 87.06C184.887 87.06 185.914 87.28 186.794 87.72C187.674 88.0133 188.114 88.3067 188.114 88.6C188.114 89.48 186.28 89.92 182.614 89.92C173.96 89.92 165.527 91.1667 157.314 93.66C157.314 95.1267 157.314 96.6667 157.314 98.28C157.46 99.8933 157.534 101.433 157.534 102.9C157.534 109.647 157.314 115.807 156.874 121.38C156.58 126.807 156.287 131.207 155.994 134.58C154.82 145.433 152.107 155.48 147.854 164.72C143.6 173.96 138.32 181.293 132.014 186.72C125.854 192.293 119.18 195.08 111.994 195.08ZM236.536 186.28C234.336 186.28 231.989 186.06 229.496 185.62C219.523 183.567 211.309 178.873 204.856 171.54C198.549 164.207 193.856 155.26 190.776 144.7C187.843 133.993 186.376 122.7 186.376 110.82C186.376 100.847 187.843 90.8733 190.776 80.9C193.856 70.9267 198.036 61.54 203.316 52.74C208.596 43.94 214.683 36.1667 221.576 29.42C228.616 22.5267 236.096 17.1733 244.016 13.36C252.083 9.39999 260.296 7.42 268.656 7.42C275.843 7.42 281.636 8.88666 286.036 11.82C290.436 14.6067 293.663 18.3467 295.716 23.04C297.769 27.5867 298.796 32.5733 298.796 38C298.796 43.28 297.843 48.6333 295.936 54.06C294.176 59.34 291.609 64.2533 288.236 68.8C284.863 73.3467 280.829 77.0133 276.136 79.8C271.443 82.44 266.236 83.76 260.516 83.76C257.729 83.76 254.649 83.32 251.276 82.44C250.103 82 249.516 81.56 249.516 81.12C249.516 80.3867 250.396 80.02 252.156 80.02C253.036 80.02 253.696 80.0933 254.136 80.24C255.749 80.68 257.289 80.9 258.756 80.9C262.863 80.9 266.823 79.58 270.636 76.94C274.596 74.3 278.116 70.8533 281.196 66.6C284.276 62.3467 286.696 57.7267 288.456 52.74C290.216 47.6067 291.096 42.62 291.096 37.78C291.096 31.62 289.409 26.1933 286.036 21.5C282.663 16.8067 277.016 13.9467 269.096 12.92C268.363 12.7733 267.556 12.7 266.676 12.7C265.796 12.5533 264.989 12.48 264.256 12.48C257.216 12.48 250.323 14.3867 243.576 18.2C236.976 21.8667 230.816 27 225.096 33.6C219.523 40.0533 214.609 47.5333 210.356 56.04C206.103 64.5467 202.729 73.5667 200.236 83.1C197.889 92.4867 196.716 101.947 196.716 111.48C196.716 122.92 197.889 133.773 200.236 144.04C202.583 154.16 206.323 162.667 211.456 169.56C216.736 176.453 223.629 180.707 232.136 182.32C232.869 182.467 233.603 182.54 234.336 182.54C235.069 182.687 235.729 182.76 236.316 182.76C243.649 182.76 249.076 179.313 252.596 172.42C256.263 165.527 258.096 157.093 258.096 147.12C258.096 141.987 257.656 136.707 256.776 131.28C251.789 131.867 246.803 132.893 241.816 134.36C236.976 135.827 232.136 137.587 227.296 139.64C227.003 139.787 226.636 139.86 226.196 139.86C225.463 139.86 224.876 139.493 224.436 138.76C224.143 138.027 223.996 137.147 223.996 136.12C223.996 135.093 224.216 134.14 224.656 133.26C225.096 132.233 225.829 131.573 226.856 131.28C232.136 129.227 237.416 127.76 242.696 126.88C247.976 126 253.329 125.56 258.756 125.56C264.623 125.56 270.563 126.073 276.576 127.1C282.736 128.127 288.969 129.667 295.276 131.72C297.769 132.453 299.016 133.333 299.016 134.36C299.016 134.653 298.576 134.8 297.696 134.8C296.963 134.8 295.496 134.58 293.296 134.14C289.189 132.82 285.009 131.867 280.756 131.28C276.649 130.693 272.543 130.4 268.436 130.4C266.969 130.4 265.503 130.473 264.036 130.62C262.569 130.62 261.103 130.693 259.636 130.84C262.716 138.907 264.256 146.533 264.256 153.72C264.256 163.4 261.689 171.247 256.556 177.26C251.423 183.273 244.749 186.28 236.536 186.28ZM314.206 122.26C313.766 122.26 313.106 121.82 312.226 120.94C311.346 120.06 310.613 119.18 310.026 118.3C309.586 117.273 309.586 116.76 310.026 116.76C314.133 116.173 317.946 115.807 321.466 115.66C324.986 115.367 328.286 115.22 331.366 115.22C336.793 115.22 341.413 115.513 345.226 116.1C349.186 116.54 352.34 117.127 354.686 117.86C355.126 118.007 355.346 118.3 355.346 118.74C355.346 119.473 354.906 119.84 354.026 119.84C348.746 119.84 342.513 120.06 335.326 120.5C328.14 120.94 321.1 121.527 314.206 122.26Z" />
        </svg>
      </div>
      <div className="space-y-6">
        {/* Social icons */}
        <ul className="inline-flex gap-4">
          <li>
            <a
              className="w-8 h-8 rounded-full flex items-center justify-center bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600/[0.65] shadow-xs text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-100 transition-colors"
              href="https://x.com/tchamiocode"
              aria-label="X"
            >
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="14"
              >
                <path d="M16 14h-4.938L7.197 9.108 2.771 14H.316l5.736-6.342L0 0h5.063l3.496 4.476L12.601 0h2.454L9.697 5.932 16 14Zm-4.26-1.422h1.36L4.323 1.347H2.865l8.875 11.231Z" />
              </svg>
            </a>
          </li>
          <li>
            <a
              className="w-8 h-8 rounded-full flex items-center justify-center bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600/[0.65] shadow-xs text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-100 transition-colors"
              href="https://github.com/tchamio"
              aria-label="GitHub"
            >
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
              >
                <path d="M7.95 0C3.578 0 0 3.578 0 7.95c0 3.479 2.286 6.46 5.466 7.553.397.1.497-.199.497-.397v-1.392c-2.187.497-2.683-.994-2.683-.994-.398-.894-.895-1.192-.895-1.192-.696-.497.1-.497.1-.497.795.1 1.192.795 1.192.795.696 1.292 1.888.894 2.286.696.1-.497.298-.895.497-1.093-1.79-.2-3.578-.895-3.578-3.976 0-.894.298-1.59.795-2.087-.1-.198-.397-.993.1-2.086 0 0 .695-.2 2.186.795a6.408 6.408 0 0 1 1.987-.299c.696 0 1.392.1 1.988.299 1.49-.994 2.186-.796 2.186-.796.398 1.094.199 1.889.1 2.087.496.597.795 1.292.795 2.087 0 3.081-1.889 3.677-3.677 3.876.298.398.596.895.596 1.59v2.187c0 .198.1.496.596.397C13.714 14.41 16 11.43 16 7.95 15.9 3.578 12.323 0 7.95 0Z" />
              </svg>
            </a>
          </li>
        </ul>
        {/* Copyright notes */}
        <p className="text-sm text-gray-400 dark:text-gray-600">
          &copy; Frederic GODI. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
