const trimite = document.querySelector("#buton");

trimite.addEventListener("click", async (e) => {
  e.preventDefault();
  const numeInput = document.querySelector("#nume");
  const emailInput = document.querySelector("#email");
  const subiectInput = document.querySelector("#subiect"); 
  const mesajInput = document.querySelector("#mesaj");

  const nume = numeInput.value.trim();
  const email = emailInput.value.trim();  
  const subiect = subiectInput.value.trim();
  const mesaj = mesajInput.value.trim();

  if(!nume || !email || !subiect || !mesaj) {
    alert("Te rog completează toate câmpurile!");
    return;
  }

  // Moved the fetch logic inside the async click handler
  const date = {nume, email, subiect, mesaj};
  const url = "http://localhost:5000/script/email.js";
/*
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(date),
    });
    
    if(response.ok) {
      alert("Email trimis cu succes!");
      numeInput.value = "";
      emailInput.value = "";
      subiectInput.value = "";
      mesajInput.value = "";
    } else {
      const error = await response.json();
      alert(`Eroare la trimitere! ${error.message || 'Eroare necunoscuta'}`);
    }
  }
  catch (error) {
    alert(`Eroare la trimitere! ${error.message}`);
  }
});

*/