import { AiFillCopyrightCircle } from "react-icons/ai";

export default function Footer() {
  return (
    <section>
      <hr className="mt-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

      <div className="flex justify-end">
        <div className="flex items-center text-gray-800 dark:text-gray-300">
          <AiFillCopyrightCircle className="mr-1" />
          <p className="text-sm py-1 leading-8">2023 - 2025 Ye. All Rights Reserved.</p>
        </div>
      </div>
    </section>
  );
}