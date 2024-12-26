import CustomNavLink from "./CustomNavLink"


function HeaderMenu({className}) {
  return (
    <ul className={className}>
          <CustomNavLink to="/">صفحه اصلی</CustomNavLink>
          <CustomNavLink to="/">گیاه پزشک </CustomNavLink>
          <CustomNavLink to="/"> وبلاگ</CustomNavLink>
          <CustomNavLink to="/"> تماس با ما</CustomNavLink>
          <CustomNavLink to="/">درباره ما </CustomNavLink>
        </ul>
  )
}

export default HeaderMenu
