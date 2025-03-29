import React from "react";
import { FacebookShareButton, TwitterShareButton } from "react-share";
import { Share2 } from "lucide-react";
import { Facebook } from "lucide-react";
import { Twitter } from "lucide-react";

const ShereButton = ({ id }) => {
  const url = `http://localhost:5173/user/camping/${id}`;
  const title = "เชิญชมเว็บไซต์ของเรา!";
  return (
    <div className="dropdown dropdown-left dropdown-end">
      <div tabIndex={0} role="button" className="btn m-1">
        <Share2 />
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-box z-1 gap-2 shadow-xl"
      >
        <li>
          <FacebookShareButton url={url}>
            <Facebook className="cursor-pointer" />
          </FacebookShareButton>
        </li>
        <li>
          <TwitterShareButton url={url} title={title}>
            <Twitter className="cursor-pointer"/>
          </TwitterShareButton>
        </li>
      </ul>
    </div>
  );
};

export default ShereButton;
