function showCheckboxes() {
 var checkboxes = document.getElementById("checkboxes");
 checkboxes.style.display = checkboxes.style.display === "block" ? "none" : "block";
}

function filterOptions() {
 var input = document.getElementById("searchBox").value.toLowerCase();
 var labels = document.getElementsByTagName("label");

 for (var i = 0; i < labels.length; i++) {
   var labelText = labels[i].textContent.toLowerCase();

   if (labelText.indexOf(input) > -1) {
     labels[i].style.display = "block";
   } else {
     labels[i].style.display = "none";
   }
 }
}

// ACCORDIAN
const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
  const header = item.querySelector('.accordion-header');
  const content = item.querySelector('.accordion-content');

  header.addEventListener('click', () => {
    // Check if the clicked item is already active
    const isActive = item.classList.contains('active');

    // Close all accordion items
    accordionItems.forEach(item => {
      item.classList.remove('active');
      item.querySelector('.accordion-content').style.display = 'none';
    });

    // Open the clicked item if it wasn't already active
    if (!isActive) {
      item.classList.add('active');
      content.style.display = 'block';
    }
  });
});