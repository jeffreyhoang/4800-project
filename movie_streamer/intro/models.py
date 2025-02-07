from django.db import models

class MeetingLog(models.Model):
    title = models.CharField(max_length=255)
    date = models.DateField()
    attendees = models.TextField()  # Can store comma-separated names or use ManyToManyField
    topics_discussed = models.TextField()
    action_items = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.title} - {self.date}"
