const styles = {
  container: {
    width: "100%",
    backgroundColor: "#0d1117",
    height: "100vh",
    overflowY: "auto",
    paddingTop: 10,
  },

  chatItem: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "12px 15px",
    cursor: "pointer",
    borderBottom: "1px solid #252d38",
  },

  avatar: {
    width: 55,
    height: 55,
    borderRadius: "50%",
    objectFit: "cover",
    marginRight: 15,
  },

  content: {
    flex: 1,
    color: "white",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: 5,
  },

  title: {
    fontWeight: "bold",
    fontSize: 16,
  },

  time: {
    fontSize: 12,
    color: "gray",
  },

  messageRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  lastMessage: {
    color: "#9ca3af",
    fontSize: 14,
    maxWidth: "80%",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },

  badge: {
    backgroundColor: "#0a84ff",
    padding: "3px 10px",
    borderRadius: 20,
    fontSize: 12,
  },
};