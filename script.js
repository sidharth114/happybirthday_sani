function showSurprise() {
    document.getElementById("surprise").innerHTML =
        "🎂💖 Wishing you endless joy, love & success. You mean a lot to me 💖🎂";
}

function openVideoPopup() {
    // Optional: small feedback before popup
    setTimeout(() => {
        const modal = document.getElementById("video-modal");
        const video = document.getElementById("birthday-video");

        modal.style.display = "flex";
        video.currentTime = 0;
        video.play();
    }, 2000); // ⏳ 2-second delay
}

function closeVideoPopup() {
    const modal = document.getElementById("video-modal");
    const video = document.getElementById("birthday-video");

    video.pause();
    modal.style.display = "none";
}

