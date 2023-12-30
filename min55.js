let button = document.getElementById("card-button")
button.onclick = function(){
        window.location.href = "/mohammed-profile/Efootball.html"
}
document.addEventListener('DOMContentLoaded', function () {
    var imageInput = document.getElementById('imageInput');
    var previewImage = document.getElementById('previewImage');

    imageInput.addEventListener('change', function (event) {
        var file = event.target.files[0];

        if (file) {
            var reader = new FileReader();
            reader.onload = function (e) {
                previewImage.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    });
});

function saveImage() {
    // يمكنك أضف هنا الكود الخاص بحفظ الصورة، مثل إرسالها إلى الخادم أو استخدام API.
    alert('Image saved!');
}
