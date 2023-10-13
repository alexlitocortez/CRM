import csv 
from django.core.management.base import BaseCommand, CommandParser
from Players.models import Contract

class Command(BaseCommand):
    help = 'Import data from a CSV file into the database'

    def add_arguments(self, parser):
        parser.add_argument('csv_file', type=str, help='Path to the CSV file')

    def handle(self, *args, **kwargs):
        csv_file_path = kwargs['csv_file']

        try:
            with open('/Users/alexcortez/Desktop/projects/CRM/root/backend/csv/49ersSalary.csv', 'r') as file:
                csv_reader = csv.DictReader(file)
                for row in csv_reader:
                    Contract.objects.create(
                        name=row['Name'],
                        contract=row['Contract'],
                        terms=row['Terms'],
                        signing_bonus=row['Signing_Bonus'],
                        average_salary=row['Average_Salary'],
                        total_gtd=row['Total_GTD'],
                    )

            self.stdout.write(self.style.SUCCESS('Data imported successfully'))

        except Exception as e:
            self.stderr.write(self.style.ERROR(f'Error importing data: {e}'))