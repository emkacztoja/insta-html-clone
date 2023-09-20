document.addEventListener('DOMContentLoaded', function () {
    function toggleLike(postId) {
        const likeIcon = document.getElementById(postId + '-like');
        const likeCountElement = document.getElementById(postId + '-like-count');
        const initialLikedBy = likeCountElement.dataset.likedby;

        let likes = parseInt(likeCountElement.dataset.likes, 10) || 0;

        if (likeIcon.name === 'heart-outline') {
            likeIcon.name = 'heart';
            likeIcon.style.color = 'red';
            likeIcon.classList.add('pop-animation');
            likes++;
        } else {
            likeIcon.name = 'heart-outline';
            likeIcon.style.color = 'black';
            likeIcon.classList.remove('pop-animation');
            likes--;
        }

        const likedBy = likes === 0 ? '' : `<strong>${initialLikedBy}</strong> and `;
        const likeText = likes === 1 ? 'like' : 'likes';
        likeCountElement.dataset.likes = likes;
        likeCountElement.innerHTML = `Liked by ${likedBy}<strong>${likes} others</strong>`;
    }

    function attachLikeEventListener(postId, initialLikes) {
        const likeButton = document.getElementById(postId + '-like');

        likeButton.addEventListener('click', () => {
            likeButton.classList.toggle('liked');

            toggleLike(postId);
        });

        const likeCountElement = document.getElementById(postId + '-like-count');
        likeCountElement.dataset.likes = initialLikes;
    }

    attachLikeEventListener('post1', 61);
    attachLikeEventListener('post2', 75341);
    attachLikeEventListener('post3', 778);
});

function toggleBookmark(postId) {
    const bookmarkIcon = document.getElementById(postId + '-bookmark');

    if (bookmarkIcon.name === 'bookmark-outline') {
        bookmarkIcon.name = 'bookmark';
    } else {
        bookmarkIcon.name = 'bookmark-outline';
    }

    bookmarkIcon.classList.add('pop-animation');

    setTimeout(() => {
        bookmarkIcon.classList.remove('pop-animation');
    }, 300);
}

document.getElementById('post1-bookmark').addEventListener('click', function() {
    toggleBookmark('post1');
});
document.getElementById('post2-bookmark').addEventListener('click', function() {
    toggleBookmark('post2');
});
document.getElementById('post3-bookmark').addEventListener('click', function() {
    toggleBookmark('post3');
});