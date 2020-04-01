from django.contrib import admin
from .models import Fish, Bug, Fossil

admin.site.register([Fish, Bug, Fossil])