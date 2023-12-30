document.addEventListener('DOMContentLoaded', function() {
    var profileImage = document.getElementById('profileImage');
    var imageInput = document.getElementById('imageInput');
    var userNameElement = document.getElementById('userName');
    var userEmailElement = document.getElementById('userEmail');

    // استخدم معرّف المستخدم كجزء من مفتاح تخزين الصورة
    var userId = 'user'; // قم بتعيين معرّف فريد لكل مستخدم
    var savedImage = localStorage.getItem('userImage_' + userId);
    var savedName = localStorage.getItem('userName_' + userId);
    var savedEmail = localStorage.getItem('userEmail_' + userId);

    if (savedImage) {
        profileImage.src = savedImage;
    }

    if (savedName) {
        userNameElement.innerText = savedName;
    }

    if (savedEmail) {
        userEmailElement.innerText = savedEmail;
    }

    imageInput.addEventListener('change', function(event) {
        var file = event.target.files[0];

        if (file) {
            var reader = new FileReader();
            reader.onload = function(e) {
                profileImage.src = e.target.result;

                // استخدم معرّف المستخدم كجزء من مفتاح تخزين الصورة
                saveToLocalStorage('userImage_' + userId, e.target.result);
            };
            reader.readAsDataURL(file);
        }
    });
});

function saveImage() {
    alert('تم حفظ الصورة!');
    document.getElementById('saveButton').style.display = 'none';
}

function editProfileMenu() {
    var editProfileMenu = document.getElementById('editProfileMenu');
    editProfileMenu.style.display = editProfileMenu.style.display === 'none' ? 'block' : 'none';
}

function editName() {
    var newName = prompt('أدخل الاسم الجديد:');
    if (newName !== null) {
        document.getElementById('userName').innerText = newName;

        // استخدم معرّف المستخدم كجزء من مفتاح تخزين الاسم
        saveToLocalStorage('userName_' + userId, newName);
    }
}

function editEmail() {
    var newEmail = prompt('أدخل البريد الإلكتروني الجديد:');
    if (newEmail !== null) {
        document.getElementById('userEmail').innerText = newEmail;

        // استخدم معرّف المستخدم كجزء من مفتاح تخزين البريد الإلكتروني
        saveToLocalStorage('userEmail_' + userId, newEmail);
    }
}

// دالة لحفظ القيم في Local Storage
function saveToLocalStorage(key, value) {
    localStorage.setItem(key, value);
}

function redirectToAnotherPage() {
    window.location.href = 'www.facebook.com/100050605021823'; // تغيير اسم الصفحة الهدف حسب احتياجاتك
}
