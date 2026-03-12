Django Signals
Signals let apps react to events automatically.
Example events:
• model saved
• model deleted
• user logged in
Signals help you run background logic automatically.
Example: Send Email After User Created
Python
Copy code
from django.db.models.signals import post_save
from django.dispatch import receiver
from .models import User

@receiver(post_save, sender=User)
def send_welcome_email(sender, instance, created, **kwargs):

    if created:
        print("Send welcome email to", instance.email)
Now every time a user is created:
Copy code

User.objects.create(...)
The signal runs automatically.
Common Signals
Signal
Trigger
post_save
after saving a model
pre_save
before saving
post_delete
after deleting
m2m_changed
many-to-many changes
