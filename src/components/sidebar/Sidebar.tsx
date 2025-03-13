import React from "react";
import styles from "@/components/sidebar/Sidebar.module.css";
import HomeIcon from "@mui/icons-material/Home";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";

const Sidebar = () => {
  return (
    <div className={styles.sidebar_container}>
      <div>Logo</div>
      <div className={styles.sidebar_icons}>
        <HomeIcon
          fontSize="large"
          sx={{ color: "white" }}
          className={styles.icon}
        />
        <CalendarMonthIcon
          fontSize="large"
          sx={{ color: "white" }}
          className={styles.icon}
        />
        <NotificationsIcon
          fontSize="large"
          sx={{ color: "white" }}
          className={styles.icon}
        />
      </div>
      <div className={styles.sidebar_bottom}>
        <SettingsIcon
          fontSize="large"
          sx={{ color: "white", position: "absolute", bottom: 20 }}
          className={styles.icon}
        />
      </div>
    </div>
  );
};

export default Sidebar;
