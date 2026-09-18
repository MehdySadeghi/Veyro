import vivo15 from "../images/products/laptops/laptop-asus-vivo15-1.webp";
import vivo15Hover from "../images/products/laptops/laptop-asus-vivo15-2.webp";
import dell15 from "../images/products/laptops/laptop-dell-1.webp";
import dell15Hover from "../images/products/laptops/laptop-dell-2.webp";
import vivo16 from "../images/products/laptops/laptop-asus-vivo16-1.webp";
import vivo16Hover from "../images/products/laptops/laptop-asus-vivo16-2.webp";
import macbook from "../images/products/laptops/laptop-mac-1.webp";
import macbookHover from "../images/products/laptops/laptop-mac-2.webp";

import Airpods from "../images/products/headphones/headphone-apple-1.webp";
import AirpodsHover from "../images/products/headphones/headphone-apple-2.webp";
import razerheadphone from "../images/products/headphones/headphone-razer-1.webp";
import razerheadphoneHover from "../images/products/headphones/headphone-razer-2.webp";
import logitechHeadphone from "../images/products/headphones/headphone-logitech-1.webp";
import logitechHeadphoneHover from "../images/products/headphones/headphone-logitech-2.webp";
import g325Headphone from "../images/products/headphones/headphone-logitech-G325-1.webp";
import g325HeadphoneHover from "../images/products/headphones/headphone-logitech-G325-2.webp";

import razerKeyboard from "../images/products/keyboards/keyboard-razer-1.webp";
import razerKeyboardHover from "../images/products/keyboards/keyboard-razer-2.webp";
import alienwareKeyboard from "../images/products/keyboards/keyboard-alienware-1.webp";
import alienwareKeyboardHover from "../images/products/keyboards/keyboard-alienware-2.webp";
import asusKeyboard from "../images/products/keyboards/keyboard-asus-rog-1.webp";
import asusKeyboardHover from "../images/products/keyboards/keyboard-asus-rog-2.webp";
import logitechKeyboard from "../images/products/keyboards/keyboard-logitech-mxKeys-1.webp";
import logitechKeyboardHover from "../images/products/keyboards/keyboard-logitech-mxKeys-2.webp";

import mobiFold from "../images/products/mice/mouse-logitech-1.webp";
import mobiFoldHover from "../images/products/mice/mouse-logitech-2.webp";
import appleMouse from "../images/products/mice/mouse-apple-1.webp";
import appleMouseHover from "../images/products/mice/mouse-apple-2.webp";
import alienwareMouse from "../images/products/mice/mouse-alienware-1.webp";
import alienwareMouseHover from "../images/products/mice/mouse-alienware-2.webp";
import asusMouse from "../images/products/mice/mouse-asus-rog-1.webp";
import asusMouseHover from "../images/products/mice/mouse-asus-rog-2.webp";

import alienwareMonitor from "../images/products/monitors/monitor-alienware-1.webp";
import alienwareMonitorHover from "../images/products/monitors/monitor-alienware-2.webp";
import asusTufMonitor from "../images/products/monitors/monitor-asus-tuf-1.webp";
import asusTufMonitorHover from "../images/products/monitors/monitor-asus-tuf-2.webp";
import asusProArtMonitor from "../images/products/monitors/monitor-asus-proArt-1.webp";
import asusProArtMonitorHover from "../images/products/monitors/monitor-asus-proArt-2.webp";
import dellMonitor from "../images/products/monitors/monitor-dell-1.webp";
import dellMonitorHover from "../images/products/monitors/monitor-dell-2.webp";

import applePc from "../images/products/pc/pc-apple-1.webp";
import applePcHover from "../images/products/pc/pc-apple-2.webp";
import asusPc from "../images/products/pc/pc-asus-1.webp";
import asusPcHover from "../images/products/pc/pc-asus-2.webp";
import dellPc24 from "../images/products/pc/pc-dell-24-1.webp";
import dellPc24Hover from "../images/products/pc/pc-dell-24-2.webp";
import dellPc27 from "../images/products/pc/pc-dell-27-1.webp";
import dellPc27Hover from "../images/products/pc/pc-dell-27-2.webp";

export const products = [
  {
    id: 1,
    name: "Vivobook 15 (F1502)",
    description:
      "A versatile everyday laptop designed for work, study, and daily productivity.",
    price: 129.99,
    category: "laptops",
    image: vivo15,
    hoverImage: vivo15Hover,
    popular: true,
  },
  {
    id: 2,
    name: "AirPods Max 2",
    description:
      "Premium over-ear headphones combining immersive sound with a refined.",
    price: 549.0,
    category: "headphones",
    image: Airpods,
    hoverImage: AirpodsHover,
    popular: true,
  },
  {
    id: 3,
    name: "RazerV3 Pro Keyboard",
    description:
      "A high-performance gaming keyboard built for fast, precise, competitive play.",
    price: 249.99,
    category: "keyboards",
    image: razerKeyboard,
    hoverImage: razerKeyboardHover,
    popular: true,
  },
  {
    id: 4,
    name: "Mobi Fold Mouse",
    description:
      "A compact, portable mouse designed for comfortable everyday use and easy travel.",
    price: 79.99,
    category: "mice",
    image: mobiFold,
    hoverImage: mobiFoldHover,
    popular: true,
  },
  {
    id: 5,
    name: "Alienware 34 280Hz",
    description:
      "An immersive ultrawide display built for high-refresh-rate gaming and vivid visuals.",
    price: 799.99,
    category: "monitors",
    image: alienwareMonitor,
    hoverImage: alienwareMonitorHover,
    popular: true,
  },
  {
    id: 6,
    name: "Dell 15 Laptop",
    description:
      "A practical laptop offering a balanced combination of performance and portability.",
    price: 759.99,
    category: "laptops",
    image: dell15,
    hoverImage: dell15Hover,
    popular: true,
  },
  {
    id: 7,
    name: "MacBook Neo",
    description:
      "A sleek, modern laptop focused on simplicity, portability, and everyday performance.",
    price: 699.0,
    category: "laptops",
    image: macbook,
    hoverImage: macbookHover,
    popular: false,
    new: true,
  },
  {
    id: 8,
    name: "iMac",
    description:
      "A sleek all-in-one desktop combining powerful performance with a clean, space-saving design.",
    price: 1499.99,
    category: "pcs",
    image: applePc,
    hoverImage: applePcHover,
    popular: false,
    new: true,
  },
  {
    id: 9,
    name: "Razer BlackShark V3 Pro",
    description:
      "A premium wireless gaming headset focused on immersive audio.",
    price: 249.99,
    category: "headphones",
    image: razerheadphone,
    hoverImage: razerheadphoneHover,
    popular: true,
  },
  {
    id: 10,
    name: "ASUS ProArt Display OLED",
    description:
      "A professional OLED monitor designed for creators who need exceptional color and image quality.",
    price: 599.99,
    category: "monitors",
    image: asusProArtMonitor,
    hoverImage: asusProArtMonitorHover,
    popular: false,
    new: true,
  },
  {
    id: 11,
    name: "ASUS Vivobook S16",
    description:
      "A spacious and versatile laptop built for productivity, creativity, and everyday multitasking.",
    price: 999.99,
    category: "laptops",
    image: vivo16,
    hoverImage: vivo16Hover,
    popular: false,
    new: true,
  },
  {
    id: 12,
    name: "ASUS TUF Gaming Monitor",
    description:
      "A durable gaming monitor designed to deliver smooth performance and responsive gameplay.",
    price: 799.99,
    category: "monitors",
    image: asusTufMonitor,
    hoverImage: asusTufMonitorHover,
    popular: false,
    new: true,
  },
  {
    id: 13,
    name: "Dell 27 Plus 4K Monito",
    description:
      "A sharp 27-inch display offering detailed visuals for productivity, entertainment, and creative work.",
    price: 279.99,
    category: "monitors",
    image: dellMonitor,
    hoverImage: dellMonitorHover,
    popular: false,
    new: true,
  },
  {
    id: 14,
    name: "Zone Wireless 2 ES",
    description:
      "A modern wireless headset designed for comfortable communication and focused work.",
    price: 159.99,
    category: "headphones",
    image: logitechHeadphone,
    hoverImage: logitechHeadphoneHover,
    popular: false,
    new: true,
  },
  {
    id: 15,
    name: "Logitech G325 Headphone",
    description:
      "A versatile gaming headset delivering immersive audio, clear communication, and comfortable long-session wear.",
    price: 79.99,
    category: "headphones",
    image: g325Headphone,
    hoverImage: g325HeadphoneHover,
    popular: false,
  },
  {
    id: 16,
    name: "MX Keys S",
    description:
      "A refined low-profile keyboard designed for quiet, comfortable, and productive typing.",
    price: 129.99,
    category: "keyboards",
    image: logitechKeyboard,
    hoverImage: logitechKeyboardHover,
    popular: false,
  },
  {
    id: 17,
    name: "ROG Falchion Ace HFX ZywOo Edition",
    description:
      "A compact high-performance gaming keyboard created for speed, precision, and competitive play.",
    price: 169.99,
    category: "keyboards",
    image: asusKeyboard,
    hoverImage: asusKeyboardHover,
    popular: false,
  },
  {
    id: 18,
    name: "Alienware Pro Wireless Gaming Keyboard",
    description:
      "A premium wireless gaming keyboard combining performance, precision, and a clean enthusiast-focused design.",
    price: 154.99,
    category: "keyboards",
    image: alienwareKeyboard,
    hoverImage: alienwareKeyboardHover,
    popular: false,
  },
  {
    id: 19,
    name: "ASUS V400 AiO",
    description:
      "An all-in-one desktop combining a spacious display with a clean, space-saving setup.",
    price: 1099.99,
    category: "pcs",
    image: asusPc,
    hoverImage: asusPcHover,
    popular: false,
  },
  {
    id: 20,
    name: "Dell 27 All-in-One Desktop",
    description:
      "A streamlined all-in-one computer designed to keep powerful everyday computing in one elegant setup",
    price: 1149.99,
    category: "pcs",
    image: dellPc27,
    hoverImage: dellPc27Hover,
    popular: false,
  },
  {
    id: 21,
    name: "ROG Spatha X Gaming Mouse",
    description:
      "A performance-focused gaming mouse built for precision, customization, and extended sessions.",
    price: 149.99,
    category: "mice",
    image: asusMouse,
    hoverImage: asusMouseHover,
    popular: false,
  },

  {
    id: 22,
    name: "Alienware Wireless Gaming Mouse",
    description:
      "A lightweight wireless gaming mouse designed for fast, accurate control and competitive play.",
    price: 89.99,
    category: "mice",
    image: alienwareMouse,
    hoverImage: alienwareMouseHover,
    popular: false,
  },
  {
    id: 23,
    name: "Dell 24 All-in-One Desktop",
    description:
      "A compact all-in-one desktop designed for efficient everyday computing and a clutter-free workspace.",
    price: 979.99,
    category: "PC",
    image: dellPc24,
    hoverImage: dellPc24Hover,
    popular: false,
  },
  {
    id: 24,
    name: "Magic Mouse (USB‑C)",
    description:
      "A minimalist wireless mouse with a sleek design and intuitive touch-based control.",
    price: 79.0,
    category: "mice",
    image: appleMouse,
    hoverImage: appleMouseHover,
    popular: false,
  },
];
