from django.db import models

class Record(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    unit = models.CharField(max_length=50)
    position = models.CharField(max_length=50)

    def __str__(self):
        return(f"{self.first_name} {self.last_name}")




