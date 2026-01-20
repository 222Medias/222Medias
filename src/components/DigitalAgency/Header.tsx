"use client";
import Link from "next/link";
import React, { useState } from "react";
import Sidebar from "@/components/DigitalAgency/SideBar/SideBar";
import useStickyHeader from "@/Hook/useStickyHeader";

// --- TYPE DEFINITIONS ---
interface MenuItem {
  title: string;
  href?: string;
  description?: string;
  icon?: string; // Changed to string for image path
  isMegaMenu?: boolean;
  children?: MenuItem[];
}

interface HeaderData {
  logo: { href: string; src: string; alt: string };
  menuItems: MenuItem[];
  offcanvasIconSrc: string;
}

// --- DATA ---
const headerData: HeaderData = {
  logo: {
    href: "/",
    src: "/assets/imgs/logo/logo.svg",
    alt: "Site Logo",
  },
  menuItems: [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    {
      title: "Services",
      href: "/services",
      isMegaMenu: true,
      children: [
        {
          title: "Search Engine Optimization (SEO)",
          href: "/services",
          icon: "/assets/imgs/icon/services-icons/SEO.svg",
          description: "Want to rank your business on Google? We can help!",
        },
        {
          title: "Website Design",
          href: "/services",
          icon: "/assets/imgs/icon/services-icons/Web Design.svg",
          description: "Keep your online presence looking fresh and professional!",
        },
        {
          title: "Social Media Solutions",
          href: "/services",
          icon: "/assets/imgs/icon/services-icons/Social Media Solutions.svg",
          description: "Facebook, Instagram, and Google Business Profile.",
        },
        {
          title: "Pay-Per-Click (PPC) Ads",
          href: "/services",
          icon: "/assets/imgs/icon/services-icons/PPC Ads.svg",
          description: "Make the most of your advertising budget.",
        },
        {
          title: "Review Marketing",
          href: "/reviews",
          icon: "/assets/imgs/icon/services-icons/Review Marketing.svg",
          description: "Maintain your presence online with review marketing.",
        },
        {
          title: "Interactions",
          href: "/services",
          icon: "/assets/imgs/icon/services-icons/Interactions.svg",
          description: "Engage your customers with webchat and texting.",
        },
        {
          title: "Logo + Graphic Design",
          href: "/services",
          icon: "/assets/imgs/icon/services-icons/Graphic Design.svg",
          description: "Stay top of mind with a memorable logo.",
        },
        {
          title: "Branding",
          href: "/services",
          icon: "/assets/imgs/icon/services-icons/Branding.svg",
          description: "Stay consistent with your style and messaging.",
        },
        {
          title: "Email Marketing",
          href: "/services",
          icon: "/assets/imgs/icon/services-icons/Email Marketing.svg",
          description: "Connect with your customers through email.",
        },
      ],
    },
    { title: "Contacts", href: "/contact" },
  ],
  offcanvasIconSrc: "/assets/imgs/icon/icon-4.webp",
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleSidebar = () => setIsOpen((prev) => !prev);
  useStickyHeader();

  const renderMenu = (items: MenuItem[]) => {
    return items.map((item, index) => {
      // Mega Menu Logic
      if (item.isMegaMenu && item.children) {
        return (
          <li key={index} className="menu-item-has-children mega-menu-parent">
            <Link href={item.href || "#"}>{item.title}</Link>
            <div className="mega-menu-container">
              <ul className="mega-menu-grid">
                {item.children.map((child, i) => (
                  <li key={i} className="mega-menu-item">
                    <Link href={child.href || "#"}>
                      <span className="icon-box">
                        {child.icon && (
                          <img src={child.icon} alt={`${child.title} icon`} />
                        )}
                      </span>
                      <div className="content-box">
                        <span className="title">{child.title}</span>
                        <p className="description">{child.description}</p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        );
      }

      // Standard Dropdown
      return (
        <li
          key={index}
          className={item?.children ? "menu-item-has-children" : ""}
        >
          <Link href={item?.href || "#0"}>{item?.title}</Link>
          {item?.children && (
            <ul className="dp-menu">{renderMenu(item?.children)}</ul>
          )}
        </li>
      );
    });
  };

  return (
    <>
      <Sidebar isOpen={isOpen} handleSidebar={handleSidebar} />
      <header className="header-area">
        <div className="header-main header-sticky">
          <div className="container large">
            <div className="header-area-inner">
              {/* Logo Section */}
              <div className="header-logo">
                <Link href={headerData.logo.href}>
                  <img
                    src={headerData.logo.src}
                    alt={headerData.logo.alt}
                    className="normal-logo"
                  />
                </Link>
              </div>

              {/* Nav Menu Section (Centered/Right) */}
              <div className="header-nav d-none d-xl-inline-block">
                <nav className="main-menu">
                  <ul>{renderMenu(headerData.menuItems)}</ul>
                </nav>
              </div>

              {/* Mobile Toggle Section */}
              <div className="header-offcanvas">
                <button
                  className="side-toggle"
                  onClick={handleSidebar}
                  aria-label="Toggle Sidebar"
                >
                  <img src={headerData?.offcanvasIconSrc} alt="Menu Icon" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
