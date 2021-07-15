export default `
	.assessment-rc-notification {
	  position: fixed;
	  z-index: 1000;
	  max-width: 450px;
		width: 100%;
	}
	.assessment-rc-notification-notice {
	  padding: 15px;
	  border-radius: 3px 3px;
	  border: 1px solid #999;
	  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
	  border: 0px solid rgba(0, 0, 0, 0);
	  background: #fff;
	  display: block;
	  width: auto;
	  line-height: 1.5;
	  position: relative;
	  margin: 10px 0;
	}
	.assessment-rc-notification-notice-closable {
	  padding-right: 32px;
	}
	.assessment-rc-notification-notice-close {
	  position: absolute;
	  right: 5px;
	  top: 3px;
	  color: #000;
	  cursor: pointer;
	  outline: none;
	  font-size: 16px;
	  font-weight: 700;
	  line-height: 1;
	  text-shadow: 0 1px 0 #fff;
	  filter: alpha(opacity=20);
	  opacity: 0.2;
	  text-decoration: none;
	}
	.assessment-rc-notification-notice-close-x:after {
	  content: '×';
	}
	.assessment-rc-notification-notice-close:hover {
	  opacity: 1;
	  filter: alpha(opacity=100);
	  text-decoration: none;
	}
	.assessment-rc-notification-fade-appear,
	.assessment-rc-notification-fade-enter {
	  opacity: 0;
	  animation-duration: 0.3s;
	  animation-fill-mode: both;
	  animation-timing-function: cubic-bezier(0.55, 0, 0.55, 0.2);
	  animation-play-state: paused;
	}
	.assessment-rc-notification-fade-leave {
	  animation-duration: 0.3s;
	  animation-fill-mode: both;
	  animation-timing-function: cubic-bezier(0.55, 0, 0.55, 0.2);
	  animation-play-state: paused;
	}
	.assessment-rc-notification-fade-appear.assessment-rc-notification-fade-appear-active,
	.assessment-rc-notification-fade-enter.assessment-rc-notification-fade-enter-active {
	  animation-name: rcNotificationFadeIn;
	  animation-play-state: running;
	}
	.assessment-rc-notification-fade-leave.assessment-rc-notification-fade-leave-active {
	  animation-name: rcDialogFadeOut;
	  animation-play-state: running;
	}
	@keyframes rcNotificationFadeIn {
	  0% {
	    opacity: 0;
	  }
	  100% {
	    opacity: 1;
	  }
	}
	@keyframes rcDialogFadeOut {
	  0% {
	    opacity: 1;
	  }
	  100% {
	    opacity: 0;
	  }
	}
`;
