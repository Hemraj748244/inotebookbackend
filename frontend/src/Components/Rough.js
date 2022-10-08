const getAllNotes = async () => {
  try {
    const res = await fetch(`${host}/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "text/plain;charset=UTF-8",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjMxYTAxNWY4NmQwOWZiNmU1MGFkZGMyIn0sImlhdCI6MTY2MjY0ODcxOH0.JVE47Mv4P83CSOHK5WgKgCOG0Yiy0XlG88O0ehxgdTY",
      }
    });

    if (!res.ok) {
      const message = `An error has occured: ${res.status} - ${res.statusText}`;
      throw new Error(message);
    }
    const data = await res.json();
    setNt(fortmatResponse(data));
  } catch (err) {
    setGetResult(err.message);
  }
}