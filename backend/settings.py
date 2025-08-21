from pathlib import Path
from django.utils.translation import gettext_lazy as _

BASE_DIR = Path(__file__).resolve().parent.parent



SECRET_KEY = 'django-insecure-4@5=v@q+7qb%((qf$#3egcq%38pi4so^*=7ee-1n4wsijb^375'


DEBUG = True
# DEBUG = False

ALLOWED_HOSTS = ["*"]


ALLOWED_HOSTS = [
      
    'http://localhost:5173',
    '127.0.0.1', 
    'localhost',
    # # 'JenyaTarasenko.pythonanywhere.com',
]

INSTALLED_APPS = [
        
    'modeltranslation',  #перевод моделей
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',

    'corsheaders',
    'rest_framework', #DRF
    'api.apps.ApiConfig', #app
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'whitenoise.middleware.WhiteNoiseMiddleware',  # ← обязательно 
    'django.contrib.sessions.middleware.SessionMiddleware',
    
     
    'django.middleware.locale.LocaleMiddleware',# LocaleMiddleware должен быть сразу после SessionMiddleware!
    
    'corsheaders.middleware.CorsMiddleware',#server для django react перед CommonMiddleware
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'backend.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [BASE_DIR / "templates"],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'backend.wsgi.application'




DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}



AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]




LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_TZ = True

STATICFILES_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'

# ------------------------------------

STATIC_URL = '/static/'
STATICFILES_DIRS = [
    BASE_DIR / "dist",
    BASE_DIR / "public",
   
]

STATIC_ROOT = BASE_DIR / "static"

# ------------------------------------

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

# -----------------------------------------------

INTERNAL_IPS = [
    'localhost',
    '127.0.0.1',
]
###################

CORS_ALLOW_ALL_ORIGINS = True
CORS_ALLOWED_ORIGINS = [
    
    # после обновления обязательно npm run build  и потом python manage.py collectstatic
    # "https://jenyatarasenko.pythonanywhere.com",# React
    
    
    'http://localhost:5173',
    'http://127.0.0.1:8001',

]


######################################
MEDIA_URL = '/media/'
MEDIA_ROOT = BASE_DIR / 'media'
######################################


LANGUAGE_CODE = 'ru'
USE_I18N = True
USE_L10N = True

LANGUAGES = (
    ('ru', 'Russian'),
    ('en', 'English'),
    ('uk', 'Ukrainian'), 
)

LOCALE_PATHS = [
    BASE_DIR / 'locale',
]

MODELTRANSLATION_DEFAULT_LANGUAGE = 'ru'  # язык по умолчанию