import {
  ChevronDown,
  Menu,
  Minus,
  Plus,
  Search,
  ShoppingCart,
  X,
} from "lucide-react";

import { Link, NavLink } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  clearCart,
  closeCart,
  decreaseQuantity,
  increaseQuantity,
  openCart,
  removeFromCart,
} from "../../../features/cartSlice";

import styles from "./Nav.module.css";
import logoLight from "../../../images/logo/logo-light.svg";
import { products } from "../../../data/ProductsData";

function Nav({ variant = "dark" }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const [searchQuery, setSearchQuery] = useState("");
  const [discountCode, setDiscountCode] = useState("");
  const [discountApplied, setDiscountApplied] = useState(false);

  const cart = useSelector((state) => state.cart.cart);
  const isCartOpen = useSelector((state) => state.cart.isOpen);

  const dispatch = useDispatch();

  const filteredProducts = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    if (!query) return [];

    return products.filter((product) =>
      `${product.name} ${product.category} ${product.description}`
        .toLowerCase()
        .includes(query),
    );
  }, [searchQuery]);

  function handleSearchToggle() {
    setIsSearchOpen((prev) => !prev);
  }

  function handleSearchClose() {
    setIsSearchOpen(false);
    setSearchQuery("");
  }

  function handleSearchResultClick() {
    handleSearchClose();
    setIsMenuOpen(false);
  }

  function handleMenuToggle() {
    if (!isMenuOpen) {
      dispatch(closeCart());
      setSearchQuery("");
    }

    setIsMenuOpen((prev) => !prev);
  }

  function handleMenuClose() {
    setIsMenuOpen(false);
    setIsProductsOpen(false);
  }

  function handleProductsMenuToggle() {
    setIsProductsOpen((prev) => !prev);
  }

  function handleCartOpen() {
    setIsMenuOpen(false);
    setIsProductsOpen(false);

    setSearchQuery("");
    setIsSearchOpen(false);

    dispatch(openCart());
  }

  function handleCartClose() {
    dispatch(closeCart());
  }

  function handleIncreaseButton(id) {
    dispatch(increaseQuantity(id));
  }

  function handleDecreaseButton(id) {
    dispatch(decreaseQuantity(id));
  }

  function handleRemoveButton(id) {
    dispatch(removeFromCart(id));
  }

  function handleClearCart() {
    dispatch(clearCart());
    setDiscountCode("");
    setDiscountApplied(false);
  }

  function handleDiscountApply() {
    setDiscountApplied(discountCode.trim().toUpperCase() === "VEYRO10");
  }

  const subtotal = cart.reduce(
    (total, product) => total + product.quantity * product.price,
    0,
  );

  const discount = discountApplied ? subtotal * 0.1 : 0;

  const total = subtotal - discount;

  const cartQuantity = cart.reduce(
    (total, product) => total + product.quantity,
    0,
  );

  /* =========================
     SCROLL
  ========================= */

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 50);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =========================
     LOCK PAGE SCROLL
     WHEN DRAWERS ARE OPEN
  ========================= */

  useEffect(() => {
    const shouldLockScroll = isMenuOpen || isCartOpen;

    document.body.style.overflow = shouldLockScroll ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen, isCartOpen]);

  return (
    <div className={styles.navWrapper}>
      <nav
        className={`
    ${variant === "light" ? styles.navbar__light : styles.navbar}
    ${isScrolled ? styles.navbar__scrolled : ""}
    ${isMenuOpen || isCartOpen ? styles.navbar__drawer_open : ""}
  `}
      >
        <button
          type="button"
          className={styles.mobile__menu_btn}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          onClick={handleMenuToggle}
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <Link to="/" className={styles.navbar__logo} onClick={handleMenuClose}>
          <img src={logoLight} alt="Veyro" />
        </Link>
        {!isSearchOpen && (
          <ul className={styles.navbar__links}>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? `${styles.navbar__link} ${styles.active}`
                    : styles.navbar__link
                }
              >
                Home
              </NavLink>
            </li>

            <li className={styles.navbar__products}>
              <button type="button" className={styles.navbar__products_btn}>
                Products
                <ChevronDown
                  size={16}
                  className={styles.navbar__products_icon}
                />
              </button>

              <div className={styles.products__dropdown}>
                <Link to="/products?category=laptops">Laptops</Link>

                <Link to="/products?category=monitors">Monitors</Link>

                <Link to="/products?category=pcs">Desktop PCs</Link>

                <Link to="/products?category=keyboards">Keyboards</Link>

                <Link to="/products?category=mice">Mice</Link>

                <Link to="/products?category=headphones">Headphones</Link>

                <Link to="/products" className={styles.products_dropdown__all}>
                  View all products →
                </Link>
              </div>
            </li>

            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? `${styles.navbar__link} ${styles.active}`
                    : styles.navbar__link
                }
              >
                About
              </NavLink>
            </li>
          </ul>
        )}
        <div
          className={`${styles.search} ${
            isSearchOpen ? styles.search_open : ""
          }`}
        >
          <button
            type="button"
            className={styles.search__icon_btn}
            aria-label="Search"
            onClick={handleSearchToggle}
          >
            <Search size={20} />
          </button>

          <input
            type="text"
            placeholder="Search the product you are looking for"
            className={styles.search__input}
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
          />

          <button
            type="button"
            className={styles.search__close_btn}
            aria-label="Close search"
            onClick={handleSearchClose}
          >
            <X size={20} />
          </button>

          {searchQuery.trim() && (
            <div className={styles.searched__products}>
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <Link
                    key={product.id}
                    to={`/products/${product.id}`}
                    className={styles.searched__product}
                    onClick={handleSearchResultClick}
                  >
                    <img src={product.image} alt={product.name} />

                    <div className={styles.searched__product_info}>
                      <p>{product.name}</p>

                      <span>${product.price.toFixed(2)}</span>
                    </div>
                  </Link>
                ))
              ) : (
                <p className={styles.no__results}>No products found.</p>
              )}
            </div>
          )}
        </div>
        <div
          className={`${styles.cart} ${isCartOpen ? styles.cart__open : ""}`}
        >
          <div className={styles.cart__header}>
            <div>
              <span className={styles.cart__eyebrow}>YOUR SELECTION</span>

              <h2>Cart</h2>
            </div>

            <button
              type="button"
              className={styles.cart__close_btn}
              aria-label="Close cart"
              onClick={handleCartClose}
            >
              <X size={20} />
            </button>
          </div>

          {cart.length > 0 ? (
            <>
              <div className={styles.cart__items}>
                {cart.map((product) => (
                  <div key={product.id} className={styles.product__card}>
                    <img
                      className={styles.product__Image}
                      src={product.image}
                      alt={product.name}
                    />

                    <div className={styles.product__info}>
                      <p>{product.name}</p>

                      <span className={styles.product__unit_price}>
                        ${product.price.toFixed(2)}
                      </span>

                      <div className={styles.product__quantity_section}>
                        {product.quantity === 1 ? (
                          <button
                            type="button"
                            aria-label={`Remove ${product.name}`}
                            onClick={() => handleRemoveButton(product.id)}
                          >
                            <X />
                          </button>
                        ) : (
                          <button
                            type="button"
                            aria-label={`Decrease ${product.name} quantity`}
                            onClick={() => handleDecreaseButton(product.id)}
                          >
                            <Minus />
                          </button>
                        )}

                        <span>{product.quantity}</span>

                        <button
                          type="button"
                          aria-label={`Increase ${product.name} quantity`}
                          onClick={() => handleIncreaseButton(product.id)}
                        >
                          <Plus />
                        </button>
                      </div>
                    </div>

                    <div className={styles.product__price_section}>
                      <span className={styles.product__price}>
                        ${(product.quantity * product.price).toFixed(2)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className={styles.checkout}>
                <button
                  type="button"
                  className={styles.clear__cart_btn}
                  onClick={handleClearCart}
                >
                  Clear cart
                </button>

                <div className={styles.discount}>
                  <div className={styles.discount__row}>
                    <input
                      type="text"
                      placeholder="Discount code"
                      className={styles.discount__input}
                      value={discountCode}
                      onChange={(event) => {
                        setDiscountCode(event.target.value);
                        setDiscountApplied(false);
                      }}
                    />

                    <button
                      type="button"
                      className={styles.discount__btn}
                      onClick={handleDiscountApply}
                    >
                      Apply
                    </button>
                  </div>

                  {discountCode && discountApplied && (
                    <span className={styles.discount__success}>
                      VEYRO10 applied — 10% off
                    </span>
                  )}

                  {discountCode && !discountApplied && (
                    <span className={styles.discount__hint}>
                      Use VEYRO10 for 10% off
                    </span>
                  )}
                </div>

                <div className={styles.checkout__summary}>
                  <div>
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>

                  {discount > 0 && (
                    <div className={styles.checkout__discount}>
                      <span>Discount</span>
                      <span>-${discount.toFixed(2)}</span>
                    </div>
                  )}

                  <div className={styles.checkout__total}>
                    <span>Total</span>
                    <strong>${total.toFixed(2)}</strong>
                  </div>
                </div>

                <button type="button" className={styles.purchse__btn}>
                  Purchase
                </button>
              </div>
            </>
          ) : (
            <div className={styles.cart__empty}>
              <span>Your cart is empty.</span>

              <Link to="/products" onClick={handleCartClose}>
                Continue shopping →
              </Link>
            </div>
          )}
        </div>

        <div
          className={`${styles.mobile__menu} ${
            isMenuOpen ? styles.mobile__menu_open : ""
          }`}
        >
          <div className={styles.mobile__menu_header}>
            <span>MENU</span>

            <button onClick={handleMenuClose}>
              <X />
            </button>
          </div>

          <nav className={styles.mobile__nav}>
            <NavLink to="/" onClick={handleMenuClose}>
              Home
            </NavLink>

            <div className={styles.mobile__products}>
              <button
                type="button"
                className={styles.mobile__products_btn}
                onClick={handleProductsMenuToggle}
                aria-expanded={isProductsOpen}
              >
                <span>Products</span>

                <ChevronDown
                  className={
                    isProductsOpen ? styles.mobile__products_icon_open : ""
                  }
                  size={18}
                />
              </button>

              <div
                className={`${styles.mobile__products_list} ${
                  isProductsOpen ? styles.mobile__products_list_open : ""
                }`}
              >
                <Link to="/products?category=laptops" onClick={handleMenuClose}>
                  Laptops
                </Link>

                <Link
                  to="/products?category=monitors"
                  onClick={handleMenuClose}
                >
                  Monitors
                </Link>

                <Link to="/products?category=pcs" onClick={handleMenuClose}>
                  Desktop PCs
                </Link>

                <Link
                  to="/products?category=keyboards"
                  onClick={handleMenuClose}
                >
                  Keyboards
                </Link>

                <Link to="/products?category=mice" onClick={handleMenuClose}>
                  Mice
                </Link>

                <Link
                  to="/products?category=headphones"
                  onClick={handleMenuClose}
                >
                  Headphones
                </Link>

                <Link
                  to="/products"
                  className={styles.mobile__view_all}
                  onClick={handleMenuClose}
                >
                  View all products →
                </Link>
              </div>
            </div>

            <NavLink to="/about" onClick={handleMenuClose}>
              About
            </NavLink>
          </nav>
        </div>

        <button
          type="button"
          className={`${styles.drawer__backdrop} ${
            isMenuOpen || isCartOpen ? styles.drawer__backdrop_visible : ""
          }`}
          aria-label="Close navigation"
          onClick={() => {
            handleMenuClose();
            handleCartClose();
          }}
        />

        <div className={styles.navbar__actions}>
          {!isSearchOpen && (
            <button
              type="button"
              className={styles.search__icon_btn}
              aria-label="Open search"
              onClick={handleSearchToggle}
            >
              <Search size={20} />
            </button>
          )}

          <button
            type="button"
            className={styles.cart__icon_btn}
            aria-label={`Open cart, ${cartQuantity} items`}
            onClick={handleCartOpen}
          >
            <ShoppingCart size={20} />

            {cartQuantity > 0 && (
              <span className={styles.cart__badge}>{cartQuantity}</span>
            )}
          </button>
        </div>
        <div className={styles.mobile__search}>
          <Search
            size={18}
            className={styles.mobile__search_icon}
            aria-hidden="true"
          />

          <input
            type="text"
            placeholder="Search the product you are looking for"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
          />

          {searchQuery && (
            <button
              type="button"
              aria-label="Clear search"
              onClick={() => setSearchQuery("")}
            >
              <X size={18} />
            </button>
          )}

          {searchQuery.trim() && (
            <div className={styles.mobile__searched_products}>
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <Link
                    key={product.id}
                    to={`/products/${product.id}`}
                    onClick={handleSearchResultClick}
                    className={styles.mobile__searched_product}
                  >
                    <img src={product.image} alt={product.name} />

                    <div>
                      <p>{product.name}</p>
                      <span>${product.price.toFixed(2)}</span>
                    </div>
                  </Link>
                ))
              ) : (
                <p className={styles.no__results}>No products found.</p>
              )}
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Nav;
