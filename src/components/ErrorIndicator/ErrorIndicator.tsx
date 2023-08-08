import { Alert } from "antd";

export default function ErrorIndicator() {
  return (
    <Alert
      message="Ups Something wrong"
      description="Now I FIX this PROBLEM!!!"
      type="info"
    />
  )
}