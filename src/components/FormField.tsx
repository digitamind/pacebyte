import { forwardRef, InputHTMLAttributes, TextareaHTMLAttributes } from 'react';

interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  isTextarea?: boolean;
  textareaProps?: TextareaHTMLAttributes<HTMLTextAreaElement>;
}

export const FormField = forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  FormFieldProps
>(({ label, error, isTextarea = false, textareaProps, className = '', ...props }, ref) => {
  const baseInputStyles =
    'w-full px-4 py-3 bg-dark-elevated border rounded-lg focus:ring-2 focus:ring-accent-cyan focus:border-accent-cyan transition-all text-white placeholder-gray-500 focus:outline-none transform-gpu focus:scale-[1.01]';
  const errorStyles = error ? 'border-red-400' : 'border-dark-border';

  return (
    <div className="space-y-2">
      <label htmlFor={props.id} className="block text-sm font-medium text-gray-300">
        {label}
        {props.required && <span className="text-red-400 ml-1">*</span>}
      </label>
      
      {isTextarea ? (
        <textarea
          ref={ref as React.Ref<HTMLTextAreaElement>}
          {...(textareaProps as TextareaHTMLAttributes<HTMLTextAreaElement>)}
          className={`${baseInputStyles} ${errorStyles} ${className} resize-none`}
        />
      ) : (
        <input
          ref={ref as React.Ref<HTMLInputElement>}
          {...props}
          className={`${baseInputStyles} ${errorStyles} ${className}`}
        />
      )}

      {error && (
        <p className="text-sm text-red-400">
          {error}
        </p>
      )}
    </div>
  );
});

FormField.displayName = 'FormField';
