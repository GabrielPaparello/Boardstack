import Link from "next/link";
import { data } from "@/lib/data/footer.data";

export const Footer = () => {
  return (
    <footer className="bg-light-body dark:bg-dark-body p-4 rounded-t-md">
      <section className="flex justify-around ">
        {Object.entries(data).map(([key, value]) => (
          <ul key={`${key}+${Math.random()}`}>
            <h3 className="text-lg font-bold">{key}</h3>
            {value.map((item, key) => (
              <li key={`${key}+${Math.random()}`}>
                <Link href={item.link}>{item.name}</Link>
              </li>
            ))}
          </ul>
        ))}
      </section>

      <hr className="h-[2px] my-8 bg-gray-200 border-0 dark:bg-gray-700" />
      <section>
        <ul>
          <li>
            <Link href={""}></Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link href={""}>
              Privacy Policy Terms and Conditions Copyright ©{" "}
              {new Date().getFullYear()} - All Rights Reserved
            </Link>
          </li>
        </ul>
      </section>
    </footer>
  );
};
