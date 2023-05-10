import React, { useContext } from "react";
import Link from "next/link";
import { observer } from "mobx-react";

import Container from "@/components/Container";
import { UserContext } from "../provider/context";

const Navbar = () => {
  const user = useContext(UserContext)!;
  const username = ["Jeff", "Bezz"];
  const randomUsername = username[Math.floor(Math.random() * username.length)];

  const onLoginPress = () => {
    user.setUser(randomUsername!, 100000);
  };
  return (
    <nav className="py-10">
      <div className="container mx-auto px-10">
        <div className="flex justify-between items-center text-gray-900">
          <div className="lg:w-2/12 w-6/12">
            <Link href="/">DelosNews</Link>
          </div>
          <div className="flex flex-col items-end">
            <div className="flex-shrink-0 group block">
              <div className="flex items-center">
                <div className="mr-3 flex flex-col items-end">
                  {user.account.name ? (
                    <div className="flex-shrink-0 group block">
                      <div className="flex items-center">
                        <div className="mr-3 flex flex-col items-end">
                          <Link href="/profile">
                            <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                              {user.account.name}
                            </p>
                          </Link>
                          <div className="flex items-center text-xs font-medium text-gray-500 group-hover:text-gray-700">
                            <p>
                              {"Rp " +
                                user.account.balance.toLocaleString("id-ID")}
                            </p>
                          </div>
                          {(user.isHasLuckyDraw() ||
                            Math.floor(user.account.totalSpent / 50000) >
                              0) && (
                            <Link href="/gatcha">
                              <p className="text-xs font-medium text-teal-500 group-hover:text-gray-900">
                                CLICK HERE FOR LUCKY DRAW!
                              </p>
                            </Link>
                          )}
                        </div>
                        <div className="flex items-center">
                          <Link href="/profile"></Link>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <button
                      type="button"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-teal-500 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                      onClick={onLoginPress}
                    >
                      Login
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default observer(Navbar);
