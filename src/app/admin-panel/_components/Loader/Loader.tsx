import "./loader.scss";

interface Props {
  type: "login" | "logout"
}

export default function Loader({ type }: Props) {
  return <span className={type === "login" ? "loader" : "loader-red"}></span>
}
