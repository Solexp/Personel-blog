// Menü öğelerine hover efekti ekleme
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.color = '#ff6347';  // Hover rengi
    });
    link.addEventListener('mouseout', () => {
        link.style.color = '';  // Varsayılan rengine geri dön
    });
});

// Yorum ekleme sistemi
const commentInput = document.getElementById('comment-input');
const commentsList = document.getElementById('comments-list');
const submitButton = document.getElementById('submit-comment');

if (submitButton) {
    submitButton.addEventListener('click', () => {
        const newComment = commentInput.value.trim();

        if (newComment) {
            const li = document.createElement('li');
            li.textContent = newComment;
            commentsList.appendChild(li);
            commentInput.value = '';  // Yorum alanını temizle
        } else {
            alert('Please enter a comment.');
        }
    });
}

// Form doğrulama işlemi
const form = document.getElementById('contact-form');

if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();  // Formun otomatik gönderimini engelle

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name && email && message) {
            alert('Form submitted successfully!');
            form.reset();  // Formu sıfırla
        } else {
            alert('Please fill out all fields.');
        }
    });
}

// Galeri görsellerine hover efekti ekleme
document.querySelectorAll('.gallery-grid img').forEach(img => {
    img.addEventListener('mouseover', () => {
        img.style.transform = 'scale(1.1)';
    });
    img.addEventListener('mouseout', () => {
        img.style.transform = 'scale(1)';
    });
});
// Lightbox Özelliği
document.querySelectorAll('.gallery-grid img').forEach(img => {
    img.addEventListener('click', () => {
        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox';
        document.body.appendChild(lightbox);
        const lightboxImg = document.createElement('img');
        lightboxImg.src = img.src;
        lightbox.appendChild(lightboxImg);
        lightbox.addEventListener('click', () => {
            document.body.removeChild(lightbox);
        });
    });
});
const comments = JSON.parse(localStorage.getItem('comments')) || [];
const updateCommentsUI = () => {
    commentsList.innerHTML = '';
    comments.forEach(comment => {
        const li = document.createElement('li');
        li.textContent = comment;
        commentsList.appendChild(li);
    });
};
submitButton.addEventListener('click', () => {
    const newComment = commentInput.value.trim();
    if (newComment) {
        comments.push(newComment);
        localStorage.setItem('comments', JSON.stringify(comments));
        updateCommentsUI();
        commentInput.value = '';
    }
});
updateCommentsUI();
document.getElementById('search-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const query = document.getElementById('search').value.toLowerCase();
    document.querySelectorAll('#posts-list article').forEach(post => {
        post.style.display = post.textContent.toLowerCase().includes(query) ? 'block' : 'none';
    });
});
