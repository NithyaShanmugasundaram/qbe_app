export const steps = [ 'Confirm your details', 'Consent'];

const ALPHA_NUMERIC_DASH_REGEX = /^(0|[1-9]\d*)$/;
export const validateNumber=(value)=>{
   return value !== "" && ALPHA_NUMERIC_DASH_REGEX.test(value) 
 }
