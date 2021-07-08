import { COLORS } from '@typography-lib';

export default `
	.assessment-client-modal {
		box-sizing: border-box;
		
		div {
		 box-sizing: border-box;
		}
		
		button {
			&:disabled {
				cursor: not-allowed;
				color: ${COLORS.grays.disable};
			}
		}
		
		input::-ms-clear {
		  display: none;
		}
	}
 
	.assessment-client-modal-beta {
		input::-ms-clear {
		  display: none;
		}
	
		z-index: 199 !important;
	}
`;
