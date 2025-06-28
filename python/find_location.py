import tkinter as tk
from tkinter import ttk, messagebox
import phonenumbers
from phonenumbers import geocoder, carrier, number_type, PhoneNumberType, PhoneNumberFormat

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
        parsed = phonenumbers.parse(number)
        if not phonenumbers.is_valid_number(parsed):
            messagebox.showerror("Invalid", "Not a valid phone number.")
            return

        result = {
            "Number": number,
            "International": phonenumbers.format_number(parsed, PhoneNumberFormat.INTERNATIONAL),
            "Region": geocoder.description_for_number(parsed, "en") or "Unknown",
            "Carrier": carrier.name_for_number(parsed, "en") or "Unknown",
            "Type": get_number_type_str(number_type(parsed))
        }

        result_text.delete("1.0", tk.END)
        for key, value in result.items():
            result_text.insert(tk.END, f"{key}: {value}\n")

    except phonenumbers.NumberParseException as e:
        messagebox.showerror("Error", str(e))

# GUI setup
root = tk.Tk()
root.title("Phone Number Checker")
root.geometry("500x300")
root.resizable(False, False)

ttk.Label(root, text="Enter Phone Number:").pack(pady=10)
entry = ttk.Entry(root, width=40)
entry.pack()

ttk.Button(root, text="Check", command=check_number).pack(pady=10)

result_text = tk.Text(root, height=10, width=60, font=("Courier", 10))
result_text.pack(pady=5)

root.mainloop()
