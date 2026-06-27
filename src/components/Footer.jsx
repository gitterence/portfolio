import { AiFillCopyrightCircle } from "react-icons/ai";

export default function Footer() {
  return (
    <div>
      <hr className="mt-6 border-zinc-200 sm:mx-auto lg:my-8 dark:border-zinc-700" />

      <div className="flex justify-end">
        <div className="flex items-center text-zinc-700 dark:text-zinc-300">
          <AiFillCopyrightCircle className="mr-1" />
          <p className="text-sm py-1 leading-8">2023 - 2026 Terence Ye</p>
        </div>
      </div>
    </div>
  );
}
