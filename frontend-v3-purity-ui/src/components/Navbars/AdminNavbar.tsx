import { Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { AdminNavbarLinks } from "./AdminNavbarLinks";

interface Props {
  fixed: boolean;
  onOpen: () => void;
}

export const AdminNavbar = (props: Props) => {
  const { fixed, onOpen } = props;
  
  const mainText = useColorModeValue("gray.700", "gray.200");
  const navbarBackdrop = "blur(21px)";
  const secondaryMargin = "0px";
  const paddingX = "15px";
  
  const [scrolled, setScrolled] = useState(window.scrollY > 1);

  useEffect(() => {
    const updateScrolled = () => setScrolled(window.scrollY > 1);
    window.addEventListener("scroll", updateScrolled);
    return () => window.removeEventListener("scroll", updateScrolled);
  });
  
  const [navbarBg, setNavbarBg] = useState('');
  const [navbarBorder, setNavbarBorder] = useState('');
  const [navbarFilter, setNavbarFilter] = useState('');
  const [navbarPosition, setNavbarPosition] = useState<'absolute' | 'fixed'>('absolute');
  const [navbarShadow, setNavbarShadow] = useState('');

  const navbarBgDefault = "none";
  const navbarBorderDefault = "transparent";
  const navbarFilterDefault = "none";
  const navbarPositionDefault = "absolute";
  const navbarShadowDefault = "none";

  const navbarBgFixedScrolled = useColorModeValue("linear-gradient(112.83deg, rgba(255, 255, 255, 0.82) 0%, rgba(255, 255, 255, 0.8) 110.84%)", "linear-gradient(112.83deg, rgba(255, 255, 255, 0.21) 0%, rgba(255, 255, 255, 0) 110.84%)");
  const navbarBorderFixedScrolled = useColorModeValue("#FFFFFF", "rgba(255, 255, 255, 0.31)");
  const navbarFilterFixedScrolled = useColorModeValue("none", "drop-shadow(0px 7px 23px rgba(0, 0, 0, 0.05))");
  const navbarPositionFixedScrolled = "fixed";
  const navbarShadowFixedScrolled = useColorModeValue("0px 7px 23px rgba(0, 0, 0, 0.05)", "none");

  useEffect(() => {
    setNavbarBg(fixed && scrolled ? navbarBgFixedScrolled : navbarBgDefault);
    setNavbarBorder(fixed && scrolled ? navbarBorderFixedScrolled : navbarBorderDefault);
    setNavbarFilter(fixed && scrolled ? navbarFilterFixedScrolled : navbarFilterDefault);
    setNavbarPosition(fixed && scrolled ? navbarPositionFixedScrolled : navbarPositionDefault)
    setNavbarShadow(fixed && scrolled ? navbarShadowFixedScrolled : navbarShadowDefault);
  }, [fixed, scrolled, navbarBgFixedScrolled, navbarBorderFixedScrolled, navbarFilterFixedScrolled, navbarShadowFixedScrolled]);

  return (
    <Flex
      position={navbarPosition}
      boxShadow={navbarShadow}
      bg={navbarBg}
      borderColor={navbarBorder}
      filter={navbarFilter}
      backdropFilter={navbarBackdrop}
      borderWidth="1.5px"
      borderStyle="solid"
      transitionDelay="0s, 0s, 0s, 0s"
      transitionDuration=" 0.25s, 0.25s, 0.25s, 0s"
      transition-property="box-shadow, background-color, filter, border"
      transitionTimingFunction="linear, linear, linear, linear"
      alignItems={{ xl: "center" }}
      borderRadius="16px"
      display="flex"
      minH="75px"
      justifyContent={{ xl: "center" }}
      lineHeight="25.6px"
      mx="auto"
      mt={secondaryMargin}
      pb="8px"
      right="30px"
      px={{ sm: paddingX, md: "30px", }}
      ps={{ xl: "12px", }}
      pt="8px"
      top="18px"
      w={{ sm: "calc(100vw - 30px)", xl: "calc(100vw - 75px - 275px)" }}
    >
      <Flex w="100%" flexDirection={{ sm: "column", md: "row", }} alignItems={{ xl: "center" }}>
        <Box mb={{ sm: "8px", md: "0px" }}>
          <Text color={mainText} fontSize='xl' fontWeight='800'>Dashboard</Text>
        </Box>
        <Box ms="auto" w={{ sm: "100%", md: "unset" }}>
          <AdminNavbarLinks onOpen={onOpen} />
        </Box>
      </Flex>
    </Flex>
  );
}