import tkinter as tk
from tkinter import ttk, messagebox
import phonenumbers
from phonenumbers import geocoder, carrier, number_type, PhoneNumberType, PhoneNumberFormat, timezone, region_code_for_number

# Get number type as string
def get_number_type_str(num_type):
    return {
        PhoneNumberType.MOBILE: "Mobile",
        PhoneNumberType.FIXED_LINE: "Fixed Line",
        PhoneNumberType.FIXED_LINE_OR_MOBILE: "Fixed Line or Mobile",
        PhoneNumberType.VOIP: "VoIP",
        PhoneNumberType.TOLL_FREE: "Toll-Free",
        PhoneNumberType.PREMIUM_RATE: "Premium Rate"
    }.get(num_type, "Unknown")

# Check and display phone number details
def check_number():
    number = entry.get().strip()
    try:
        parsed = phonenumbers.parse(number, "IN")  # Default to India if no country code
        if not phonenumbers.is_valid_number(parsed):
            messagebox.showerror("Invalid", "Not a valid phone number.")
            return

        result = {
            "Number": number,
            "International Format": phonenumbers.format_number(parsed, PhoneNumberFormat.INTERNATIONAL),
            "Region": geocoder.description_for_number(parsed, "en") or "Unknown",
            "Country Code": region_code_for_number(parsed),
            "Carrier": carrier.name_for_number(parsed, "en") or "Unknown",
            "Line Type": get_number_type_str(number_type(parsed)),
            "Time Zone": ", ".join(timezone.time_zones_for_number(parsed))
        }

        result_text.delete("1.0", tk.END)
        for key, value in result.items():
            result_text.insert(tk.END, f"{key}: {value}\n")

    except phonenumbers.NumberParseException as e:
        messagebox.showerror("Error", str(e))

# Clear input and result
def clear_fields():
    entry.delete(0, tk.END)
    result_text.delete("1.0", tk.END)

# Copy result to clipboard
def copy_result():
    text = result_text.get("1.0", tk.END)
    if text.strip():
        root.clipboard_clear()
        root.clipboard_append(text)
        messagebox.showinfo("Copied", "Result copied to clipboard.")
    else:
        messagebox.showwarning("Empty", "No result to copy.")

# Save result to text file
def save_to_file():
    text = result_text.get("1.0", tk.END)
    if text.strip():
        with open("phone_info.txt", "w") as f:
            f.write(text)
        messagebox.showinfo("Saved", "Result saved to phone_info.txt.")
    else:
        messagebox.showwarning("Empty", "No result to save.")

# GUI setup
root = tk.Tk()
root.title("📞 Phone Number Checker")
root.geometry("550x400")
root.resizable(False, False)

# UI Layout
ttk.Label(root, text="Enter Phone Number (with or without country code):").pack(pady=10)

entry = ttk.Entry(root, width=40)
entry.pack()

ttk.Button(root, text="🔍 Check", command=check_number).pack(pady=5)

# Result box
result_text = tk.Text(root, height=10, width=65, font=("Courier", 10))
result_text.pack(pady=5)

# Buttons row
button_frame = ttk.Frame(root)
button_frame.pack(pady=5)

ttk.Button(button_frame, text="🧹 Clear", command=clear_fields).grid(row=0, column=0, padx=5)
ttk.Button(button_frame, text="📋 Copy Result", command=copy_result).grid(row=0, column=1, padx=5)
ttk.Button(button_frame, text="💾 Save to File", command=save_to_file).grid(row=0, column=2, padx=5)

root.mainloop()
