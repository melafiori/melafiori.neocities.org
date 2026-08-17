fetch("assets/updates.json")
  .then(res => res.json())
  .then(updates => {
    const box = document.getElementById("updates-box");
    box.innerHTML = updates
      .map(u => `<p><strong>${u.date}</strong> - ${u.text}</p>`)
      .join("");
  })
  .catch(err => console.error("No se pudo cargar updates.json:", err));