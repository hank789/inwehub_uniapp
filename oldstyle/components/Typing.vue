<style>
  @keyframes blink {
    0% {
      opacity: .2;
    }

    20% {
      opacity: 1;
    }

    100% {
      opacity: .2;
    }
  }

  .display-hidden {
    display: none;
  }

  .typing {
    margin-bottom: 37.50upx;
    color: #717577;
  }

  .typing a {
    color: #717577;
    font-weight: bold;
  }

  .typing a:hover,
  .typing a:focus {
    text-decoration: underline;
  }

  .dots {
    font-size: 60upx;
  }

  .typing span {
    animation-name: blink;
    animation-duration: 1.4s;
    animation-iteration-count: infinite;
    animation-fill-mode: both;
  }

  .typing span:nth-child(2) {
    animation-delay: .2s;
  }

  .typing span:nth-child(3) {
    animation-delay: .4s;
  }

  .typing .text {
    font-size: 24upx;
  }
</style>