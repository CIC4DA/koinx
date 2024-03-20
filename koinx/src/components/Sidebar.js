import { Link } from "react-router-dom";

const navigation = [
    { name: "Get Quote", to: "/getQuote", current: true },
    { name: "My Documents", to: "/user/documents", current: false },
    { name: "My Orders", to: "/user/orders", current: false },
    { name: "My Quote", to: "/user/quotes", current: false },
    { name: "Account", to: "/user", current: false },
  ];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Sidebar() {
  return (
    <>
      <div className="flex flex-col h-full bg-[#D9D9D9] w-64 px-5">
        <div className="overflow-y-auto flex-1 my-4">
          <div className="flex flex-col">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                className={classNames(
                  item.current
                    ? "bg-[#8D8D8D] text-black text-center"
                    : "text-black hover:bg-[#8D8D8D] hover:text-black hover:text-center",
                  "rounded-full px-8 py-2 text-[18px] text-left mx-3 my-1"
                )}
                aria-current={item.current ? "page" : undefined}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
