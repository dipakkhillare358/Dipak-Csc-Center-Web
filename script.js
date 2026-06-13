function closePopup(){
    document.getElementById("popup").style.display = "none";
}

const darkBtn = document.getElementById("darkBtn");

darkBtn.onclick = () => {
    document.body.classList.toggle("dark");
};
<script>

document.getElementById("contactForm")
.addEventListener("submit", function(e){

e.preventDefault();

emailjs.send("YOUR_SERVICE_ID",
"YOUR_TEMPLATE_ID",
{
name: document.getElementById("name").value,
email: document.getElementById("email").value,
message: document.getElementById("message").value
})

.then(function(){

alert("Message Sent Successfully!");

document.getElementById("contactForm").reset();

})

.catch(function(error){

alert("Error: " + error);

});

});

</script>