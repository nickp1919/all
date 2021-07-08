import { colors } from '@typography-lib';

export default `
	.assessment-client-modal {
		box-sizing: border-box;
		
		div {
		 box-sizing: border-box;
		}
		
		button {
			&:disabled {
				cursor: not-allowed;
				color: ${colors.grays.disable};
			}
		}
		
		input::-ms-clear {
		  display: none;
		}
	}
	
	.assessment-client-modal-page {
		z-index: 199 !important;
	}
`;
