var $buttonModal = document.querySelector('.btn');
let $darkBlock = document.querySelector('.dark');

$buttonModal.addEventListener("click", function(){
    $darkBlock.style.opacity = "1";
    $darkBlock.style.visibility = "visible";
});
$darkBlock.addEventListener("click", function(){
    $darkBlock.style.opacity = "0";
    $darkBlock.style.visibility = "hidden";
});


