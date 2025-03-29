import React from "react";
import { publiclinks, privatelinks, adminprivatelinks } from "../../utils/link";
import { Link } from "react-router";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
} from "@clerk/clerk-react";
import SignOutLink from "./SignOutLink";
import UserIcon from "./UserIcon";
import { useUser } from "@clerk/clerk-react";

const Menu = () => {
  const { user } = useUser();
  const isAdmin = user?.publicMetadata?.isAdmin;

  return (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-circle avatar"
      >
        <div className="w-10 rounded-full">
          <UserIcon />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[10000] mt-5 w-52 p-2 shadow"
      >
        <label className="py-2">MyAccount</label>
        {publiclinks.map((item, index) => {
          return (
            <li key={index}>
              <Link to={item.href}>{item.label}</Link>
            </li>
          );
        })}
        {/* กรณียังไม่ได้login */}
        <SignedOut>
          <li>
            <SignInButton mode="modal">
              <button>Login</button>
            </SignInButton>
          </li>
        </SignedOut>
        <SignedOut>
          <li>
            <SignUpButton>
              <button>Register</button>
            </SignUpButton>
          </li>
        </SignedOut>
        {/* กรณีloginแล้ว */}
        <SignedIn>
          {privatelinks.map((item, index) => {
            return (
              <li key={index}>
                <Link to={item.href}>{item.label}</Link>
              </li>
            );
          })}
          {isAdmin === true &&
            adminprivatelinks.map((item, index) => {
              return (
                <li key={index}>
                  <Link to={item.href}>{item.label}</Link>
                </li>
              );
            })}
          <li>
            <SignOutLink />
          </li>
        </SignedIn>
      </ul>
    </div>
  );
};

export default Menu;
