from django.db import models

class Record(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    unit = models.CharField(max_length=50)
    position = models.CharField(max_length=50)

    def __str__(self):
        return(f"{self.first_name} {self.last_name}")


class Salary(models.Model):
    name = models.CharField(max_length=100)
    contract_terms = models.CharField(max_length=100)
    signing_bonus = models.CharField(max_length=100)
    average_salary = models.CharField(max_length=100)
    total_gtd = models.CharField(max_length=100)

