type Status = "loading" | "success" | "error";

function logStatus(status: Status): void {
  if (status === "loading") {
    console.log("Loading...");
  } else if (status === "success") {
    console.log("Operation successful!");
  } else if (status === "error") {
    console.log("An error occurred!");
  }
}

logStatus("loading");
logStatus("success");
logStatus("error");
